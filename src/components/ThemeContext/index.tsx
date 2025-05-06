import React from "react";

const themeColours = {
  light: {
    color: "#435379",
    backgroundColor: "#F5F8FF",
    colorLight: "rgba(67, 83, 121, 0.4)",
    backgroundColorBlock: "#ffffff",
    colorInc: "#004d00",
    colorExp: "#cc0000",
    nightBlue: "#101840",
    bgCalendar: "#fffafa",
    colorWhite: "#ffffff",
    pagination: "#fff",
  },
  dark: {
    color: "#777777",
    backgroundColor: "#18181B",
    colorLight: "rgba(89, 89, 89, 0.7)",
    backgroundColorBlock: "#272B35",
    colorInc: "#079107",
    colorExp: "#db2020",
    nightBlue: "#C0C7E7",
    bgCalendar: "#6883c2",
    colorWhite: "#000",
    pagination: "#C0C7E7",
  },
};

type ThemeName = "light" | "dark";
type ThemeContextType = {
  theme: ThemeName;
  setTheme: (name: ThemeName) => void;
};
const ThemeContext = React.createContext<ThemeContextType>(undefined!);

type Props = {
  children: React.ReactNode;
};
export const ThemeProvider = ({ children }: Props) => {
  const [themeName, setThemeName] = React.useState<ThemeName>("light");

  React.useEffect(() => {
    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkOS ? "light" : "dark");
  }, []);

  React.useEffect(() => {
    const themeTrack: any = window.localStorage.getItem("themeName");
    if (themeTrack) {
      setTheme(JSON.parse(themeTrack));
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("themeName", JSON.stringify(themeName));
  }, [themeName]);

  const setTheme = (name: ThemeName) => {
    document.body.style.setProperty("--color", themeColours[name].color);
    document.body.style.setProperty(
      "--background-color",
      themeColours[name].backgroundColor,
    );
    document.body.style.setProperty(
      "--color-light",
      themeColours[name].colorLight,
    );
    document.body.style.setProperty(
      "--background-color-block",
      themeColours[name].backgroundColorBlock,
    );
    document.body.style.setProperty("--color-inc", themeColours[name].colorInc);
    document.body.style.setProperty("--color-exp", themeColours[name].colorExp);
    document.body.style.setProperty(
      "--night-blue-color",
      themeColours[name].nightBlue,
    );
    document.body.style.setProperty(
      "--background-calendar",
      themeColours[name].bgCalendar,
    );
    document.body.style.setProperty(
      "--color-white",
      themeColours[name].colorWhite,
    );
    document.body.style.setProperty(
      "--color-pagination",
      themeColours[name].pagination,
    );

    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
