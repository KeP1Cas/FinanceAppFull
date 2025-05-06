import React, { useContext } from "react";
import { observer } from "mobx-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { Dialog } from "pages/Home/components/Dialog";
import { Pane } from "components/Pane";
import { Combobox } from "components/Combobox";
import { SegmentedControl } from "components/SegmentedControl";
import { Label } from "components/Label";
import { Button } from "components/Button";
import { Input } from "components/Input";
import {
  DialogContainer,
  DialogDuoContainer,
  DialogEndLineContainer,
  DialogSoloContainer,
  GlobalStyleTransaction,
} from "pages/Home/containers/AddTransaction/AddTransactionForm/styled";

import { designSystem } from "constants/designSystem";
import { transactionTypes } from "constants/transactionTypes";

import { IDataModel, OperationsStoreContext } from "stores/OperationsStore";

import { DialogProps } from "evergreen-ui";

type Props = {
  onSubmit: SubmitHandler<any>;
  transactionInfo: IDataModel;
} & DialogProps;

const EditTransactionForm: React.FC<Props> = observer(
  ({ isShown, title, onCloseComplete, transactionInfo, onSubmit }) => {
    const OperationsStore = useContext(OperationsStoreContext);

    const { control, register, handleSubmit } = useForm({
      defaultValues: {
        _userId: transactionInfo._userId,
        _id: transactionInfo._id,
        category: transactionInfo.category,
        date: transactionInfo.date,
        description: transactionInfo.description,
        quantity: transactionInfo.quantity,
        type: transactionInfo.type,
      },
    });

    return (
      <Dialog
        isShown={isShown}
        title={title}
        onCloseComplete={onCloseComplete}
        hasFooter={false}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContainer>
            <DialogDuoContainer>
              <span>Id: {transactionInfo._id}</span>
              <span>Date: {transactionInfo.date}</span>
            </DialogDuoContainer>
            <GlobalStyleTransaction />
            <DialogSoloContainer>
              <Controller
                control={control}
                name="category"
                rules={{ required: true }}
                render={({ field }) => (
                  <Combobox
                    openOnFocus
                    items={OperationsStore.categories
                      .map(category => category)
                      .filter(
                        (value, index, self) => self.indexOf(value) === index,
                      )}
                    placeholder="Choose category..."
                    initialSelectedItem={transactionInfo.category}
                    defaultValue={transactionInfo.category}
                    onChange={value => field.onChange(value)}
                  />
                )}
              />
            </DialogSoloContainer>

            <DialogSoloContainer>
              <Input
                {...register("description", {
                  value: "",
                })}
                type="string"
                color={designSystem.color.normal}
                placeholder="Description"
                defaultValue={transactionInfo.description}
              />
            </DialogSoloContainer>

            <DialogDuoContainer>
              <Controller
                control={control}
                name="type"
                defaultValue={transactionInfo.type}
                render={({ field }) => (
                  <SegmentedControl
                    defaultValue={transactionInfo.type}
                    options={transactionTypes}
                    onChange={value => field.onChange(value)}
                  />
                )}
              />
              <Pane>
                <Label>
                  Quantity:
                  <Input
                    {...register("quantity", {
                      required: true,
                      value: transactionInfo.quantity,
                    })}
                    type="number"
                    min={1}
                    width={designSystem.indent[86]}
                    marginLeft={designSystem.indent[8]}
                    defaultValue={transactionInfo.quantity}
                    color={designSystem.color.normal}
                  />
                </Label>
              </Pane>
            </DialogDuoContainer>

            <DialogEndLineContainer>
              <Button type="submit">Confirm</Button>
            </DialogEndLineContainer>
          </DialogContainer>
        </form>
      </Dialog>
    );
  },
);
export { EditTransactionForm };
