import React, { useContext, useState } from "react";
import { observer } from "mobx-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { format } from "date-fns";

import { Datepicker } from "components/DatePicker";
import { Button } from "components/Button";
import { Dialog } from "pages/Home/components/Dialog";
import { Pane } from "components/Pane";
import { Combobox } from "components/Combobox";
import { SegmentedControl } from "components/SegmentedControl";
import { Label } from "components/Label";
import { Input } from "components/Input";
import {
  DialogContainer,
  DialogSoloContainer,
  GlobalStyleTransaction,
  DialogDuoContainer,
  StyledError,
  DialogEndLineContainer,
} from "./styled";

import { designSystem } from "constants/designSystem";
import { transactionTypes } from "constants/transactionTypes";

import { OperationsStoreContext } from "stores/OperationsStore";

import { DialogProps } from "evergreen-ui";
import Translate from "i18n/messages/translate";

type Props = {
  onSubmit: SubmitHandler<any>;
} & DialogProps;

const AddTransactionForm: React.FC<Props> = observer(
  ({ isShown, title, onCloseComplete, onSubmit }) => {
    const OperationsStore = useContext(OperationsStoreContext);

    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const {
      control,
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    return (
      <Dialog
        isShown={isShown}
        title={title}
        onCloseComplete={onCloseComplete}
        hasFooter={false}
        shouldCloseOnOverlayClick={false}
        onOpenComplete={() => {
          reset({
            quantity: null,
            category: "",
            description: "",
            type: "Income",
            date: format(selectedDate, "dd/MM/yyyy"),
          });
          setSelectedDate(new Date());
        }}
      >
        <GlobalStyleTransaction />
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContainer>
            <DialogSoloContainer>
              <Controller
                control={control}
                name="date"
                rules={{ required: true }}
                render={({ field }) => (
                  <Datepicker
                    onChange={date => {
                      setSelectedDate(date);
                      field.onChange(format(date, "dd/MM/yyyy"));
                    }}
                    selected={selectedDate}
                    dateTo={new Date()}
                  />
                )}
              />
              {errors?.date?.type === "required" && (
                <StyledError>{Translate("dateRequired")}</StyledError>
              )}
            </DialogSoloContainer>

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
                    placeholder={
                      errors?.category?.type === "required"
                        ? "This field is required!"
                        : "Choose category..."
                    }
                    onChange={value => field.onChange(value)}
                    required={errors?.category?.type === "required"}
                  />
                )}
              />
            </DialogSoloContainer>

            <DialogSoloContainer>
              <Input
                {...register("description", { value: "" })}
                type="string"
                color={designSystem.color.normal}
                placeholder="Description"
              />
            </DialogSoloContainer>

            <DialogDuoContainer>
              <Controller
                control={control}
                name="type"
                defaultValue="Income"
                render={({ field }) => (
                  <SegmentedControl
                    options={transactionTypes}
                    onChange={value => field.onChange(value)}
                  />
                )}
              />
              <Pane>
                <Label>
                  {Translate("quantity")}:
                  <Input
                    {...register("quantity", { required: true })}
                    type="number"
                    min={1}
                    width={designSystem.indent[86]}
                    marginLeft={designSystem.indent[8]}
                    color={designSystem.color.normal}
                  />
                </Label>
              </Pane>
            </DialogDuoContainer>

            <DialogEndLineContainer>
              <Button type="submit">{Translate("confirm")}</Button>
            </DialogEndLineContainer>
          </DialogContainer>
        </form>
      </Dialog>
    );
  },
);

export { AddTransactionForm };
