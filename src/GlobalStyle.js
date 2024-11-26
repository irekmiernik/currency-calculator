import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Lato', sans-serif;
      line-height: 1.5;
      font-size: 15px;
      margin: 10% auto;
      background-image: url("./images/background.png");
      background-size: 100px;
      background-repeat: repeat;
      background-position: center;
    }
`;