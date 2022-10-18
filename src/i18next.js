import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from 'lng/en.json';
import tw from 'lng/tw.json';
import jp from 'lng/jp.json';

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        },
        tw: {
            translation: tw
        },
        jp: {
            translation: jp
        }
    },
    lng: localStorage.getItem("lng") || "en",
    fallbackLng: localStorage.getItem("lng") || "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18next;