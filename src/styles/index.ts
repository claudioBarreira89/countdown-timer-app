import styled, { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,700i');

    body, html {
        height: 100%;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        line-height: 1.5;
        background-color: ${colors.background};
        color: white;
    }

    body, #root {
        width: 100%;
        display: flex;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const AppWrapper = styled.div`
    width: 100%;
    max-width: 950px;
    margin: auto;
    padding: 10px;
`;

export { default as color } from "./colors";
export default GlobalStyles;
