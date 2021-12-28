import { css } from "styled-components";

export const theme = {
  bg: "#F8F8F8",
  primaryColor: "#313131",
  secondaryColor: "#F8F8F8",
  accentColor: "#C7D0FF",
  primaryBlack: "#383838",
  primaryText: "#383838",
  ternaryColor: "#5972f8",
  mediumMargin: "10px",
  largeMargin: "15px",
  borderRadius: "5px",
  smallMargin: "5px",

  shadow: "0px 10px 10px rgba(0, 0, 0, 0.2)",
  shadowSmall: "0px 5px 10px rgba(0, 0, 0, 0.1)",
  fontFamily: '"Montserrat", sans-serif',
  secondaryFontFamily: '"Karla", sans-serif',
  spacing: {
    sectionBottom: "margin-bottom: 100px",
    sectionTop: "margin-top: 100px",
    sectionTopBottom: css`
      margin-top: 100px;
      margin-bottom: 100px;
    `,
  },
};
