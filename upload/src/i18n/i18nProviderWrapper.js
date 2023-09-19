import React from "react";
import PropTypes from "prop-types";
import { useTranslation, I18nextProvider } from "react-i18next";
import { ConfigProvider } from "antd";
import jaJP from "antd/es/locale/ja_JP";
import enUS from "antd/es/locale/en_US";

import i18n from "./i18n";

const antdLocales = {
  ja: jaJP,
  en: enUS,
};

const AntdLangSetter = ({ children }) => {
  // eslint-disable-next-line no-shadow
  const { i18n } = useTranslation();
  return (
    <ConfigProvider locale={antdLocales[i18n.language]}>
      {children}
    </ConfigProvider>
  );
};

AntdLangSetter.propTypes = {
  children: PropTypes.node.isRequired,
};

const I18nProviderWrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <AntdLangSetter>{children}</AntdLangSetter>
  </I18nextProvider>
);

I18nProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default I18nProviderWrapper;
