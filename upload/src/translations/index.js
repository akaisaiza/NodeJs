import ReactDOMServer from "react-dom/server";
import globalTranslations from "./global.json";

const initializeLanguage = {
  languages: [
    { name: "Japanese", code: "jp" },
  ],
  translation: globalTranslations,
  options: {
    renderToStaticMarkup: ReactDOMServer.renderToStaticMarkup,
    defaultLanguage: "jp",
  },
};

export default initializeLanguage;
