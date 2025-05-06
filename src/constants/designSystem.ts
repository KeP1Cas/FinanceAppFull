import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    --background-color: #F5F8FF;
    --color: #435379;
    --color-light: rgba(67, 83, 121, 0.4);
    --background-color-block: #ffffff;
    --color-inc: #004d00;
    --color-exp: #cc0000;
    --night-blue-color: #101840;
    --background-calendar:#fffafa;
    --color-white: #ffffff;
    --color-pagination: #fff;
  }
`;

const designSystem = {
  color: {
    normal: "var(--color)",
    light: "var(--color-light)",
    white: "var(--color-white)",
    green: "var(--color-inc)",
    red: "var(--color-exp)",
    nightBlue: "var(--night-blue-color)",
    cornflowerblue: "cornflowerblue",
    pagination: "var(--color-pagination)",
  },
  text: {
    fontSize: {
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      24: "24px",
      36: "36px",
      48: "48px",
    },
    lineHeight: {
      22: "22px",
      24: "24px",
    },
    color: {
      normal: "var(--color)",
      grey: "#",
      light: "rgba(67, 83, 121, 0.4)",
      danger: "#",
      warning: "#c6426e",
      success: "#6894FF",
    },
    weight: {
      normal: 500,
      small: 300,
      bold: 700,
    },
  },
  indent: {
    4: "4px",
    8: "8px",
    12: "12px",
    14: "14px",
    16: "16px",
    24: "24px",
    28: "28px",
    32: "32px",
    42: "42px",
    48: "48px",
    52: "52px",
    60: "60px",
    64: "64px",
    86: "86px",
  },
  size: {
    16: 16,
    32: 32,
    42: 42,
    64: 64,
  },
  bgColor: {
    base: "rgba(67, 83, 121, 1)",
    base10: "rgba(67, 83, 121, 0.1)",
    danger: "#",
    warning: "#",
    success: "#",
    primary: "#F5F8FF",
    light: "rgba(67, 83, 121, 0.4)",
    white: "var(--background-color-block)",
    black: "#000",
    bgCalendar: "var(--background-calendar)",
  },
  borderRadius: {
    2: "2px",
    4: "4px",
    6: "6px",
    8: "8px",
    14: "14px",
    16: "16px",
    24: "24px",
    25: "25px",
  },
  table: {
    leftSide: {
      width: "600px",
    },
    rightSide: {
      width: "465px",
    },
  },
};

export { designSystem };
