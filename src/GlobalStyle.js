import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    body, html {
        overflow-x: hidden;
        font-size: 16px;
        height: 4000px;

        @media only screen and (max-width: 768px) {
            font-size: 12px;
        }
    } 
`