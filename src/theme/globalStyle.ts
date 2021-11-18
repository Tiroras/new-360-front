import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  header, main, footer {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  button, input, textarea {
    font-family: 'Roboto', sans-serif;
  }

  button {
    background-color: ${colors.orange};
    color: ${colors.white};
    font-weight: bold;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      box-shadow: 1px 1px 5px ${colors.black};
    }
  }
`;