import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *::before, *::after, *{
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    body{
        height: 200vh;
        margin: 0;
        padding: 0;
        background: #8080802b;
    }
    .border-transparent{
        border: 1px solid transparent;
        outline: 1px solid transparent;
    }
    .error-text{
        color: crimson;
    }
` 
export const Button = styled.button`
    padding: 0.5rem 1rem;
    background:${({styledtype}) => styledtype === "light" ? "transparent":  "#FCD200" };
    color: black;
    border-radius: 5px;
    letter-spacing: 1px;
    font-family: "Ember-Text2";
    min-width:200px;
    border: ${({styledtype}) => styledtype === "light" ? "1px solid black": "1px solid transparent"};
    &:hover{
        background: ${({styledtype}) => styledtype === "light" ? "#e3e0e0": ""};
    }
`
export const ShoppingBtn = styled.button.attrs({
    type: "submit",
    className: "shop border-transparent"  
})`
    background: #FCD200 ;
    background-position: center;
    background-size: 20px;
    background-repeat: no-repeat;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0.5rem 1rem;
`