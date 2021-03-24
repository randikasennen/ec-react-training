import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import EN_TRANSLATIONS from './en/translations';
import SIN_TRANSLATIONS from './sin/translations';

i18n.use(LanguageDetector).init({
    resources: {
        en : { translations: EN_TRANSLATIONS },
        sin: { translations: SIN_TRANSLATIONS }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
})

export default i18n;