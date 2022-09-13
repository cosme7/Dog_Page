import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    body{
        background: linear-gradient(180deg, #aaabbcff, #8b8982ff, #373f47ff, #6c91c2ff, #c3c9e9ff);
    }
`;