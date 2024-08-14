import { createGlobalStyle } from "styled-components";
import arabicFont from "../fonts/arabic.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'arabic-font';
    src: url(${arabicFont}) format('truetype');
    font-weight:normal;
    font-style:normal;
}
`;

export default GlobalStyle;
