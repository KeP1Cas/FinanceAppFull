import React from "react";
import { useTheme } from "components/ThemeContext";
import { CustomInput, SliderSpan, SwitchCheckbox, SwitchLabel } from "./styled";
const ToggleSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = React.useState(false);

  const handleClick = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleChange = () => {
    setChecked((prevState: any) => !prevState);
  };

  React.useEffect(() => {
    const themeTrack: any = window.localStorage.getItem("checked");
    setChecked(JSON.parse(themeTrack));
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("checked", JSON.stringify(checked));
  }, [checked]);

  return (
    <SwitchCheckbox>
      <SwitchLabel className="switch">
        <CustomInput
          type="checkbox"
          onClick={handleClick}
          onChange={handleChange}
          checked={checked}
        />
        <SliderSpan className="slider round"> </SliderSpan>
      </SwitchLabel>
    </SwitchCheckbox>
  );
};
export default ToggleSwitch;
