import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { I18nProviderWrapper } from "./i18n";
import store from './store';
import initializeLanguage from "./translations";
import { LocalizeProvider } from "react-localize-redux";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <LocalizeProvider initialize={initializeLanguage} store={store}>
      <I18nProviderWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nProviderWrapper>
    </LocalizeProvider>
  </Provider>
);
reportWebVitals();
