import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from "react-redux";
import store from './redux/store';

import App from "./App";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/custom-styled-ui/config/globalStyle";
import { defaultTheme } from './components/custom-styled-ui/config/defaultTheme';

import './index.css';

ReactDom.render(
    <React.StrictMode>
    <Provider store={store}>

    <Router>
        <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/> {/*CSS приоритет выше*/}
        <App/>
        </ThemeProvider>
    </Router>

    </Provider>
    </React.StrictMode>
    ,document.querySelector('#root')
)