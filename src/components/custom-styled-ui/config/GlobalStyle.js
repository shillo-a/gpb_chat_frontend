import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./defaultTheme";

import MontserratBold from '../../../assets/fonts/Montserrat-Bold.woff2'
import MontserratItalic from '../../../assets/fonts/Montserrat-Italic.woff2'
import MontserratRegular from '../../../assets/fonts/Montserrat-Regular.woff2'

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: local('Montserrat-Bold'), local('MontserratBold'), url(${MontserratBold}) format('woff2');
    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}

@font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-display: swap;
    font-weight: 400;
    src: local('Montserrat-Italic'), local('MontserratItalic'), url(${MontserratItalic}) format('woff2');
    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: local('Montserrat-Regular'), local('MontserratRegular'), url(${MontserratRegular}) format('woff2');
    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}

html {
    font-size: ${defaultTheme.typography.htmlFontSize};
    font-family: ${defaultTheme.typography.fontFamily};
    font-weight: ${defaultTheme.typography.fontWeightRegular};
}

body {
    background: white;
}

`