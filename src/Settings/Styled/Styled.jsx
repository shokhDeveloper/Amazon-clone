import styled, { createGlobalStyle } from "styled-components";

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
export const Button = styled.button`
    padding: 0.5rem 1rem;
    background: #FCD200;
    color: black;
    border-radius: 5px;
    letter-spacing: 1px;
    font-family: "Ember-Text2";
    min-width:200px;
`