import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *::before, *::after, *{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        padding: 0;
    }
    .border-transparent{
        border: 1px solid transparent;
        outline: 1px solid transparent;
    }
    
` 