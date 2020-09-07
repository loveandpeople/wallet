import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

export const i18nextInit = async () => {
    await i18next.use(initReactI18next).init(
        {
            fallbackLng: 'en',
            fallbackNS: 'global',
            debug: false,
            parseMissingKeyHandler: (value) => `Translation not available for ${value}`,
            resources: {
                en: require('../locales/en/translation.json'),
                ar: require('../locales/ar/translation.json'),
                cs: require('../locales/cs/translation.json'),
                da: require('../locales/da/translation.json'),
                de: require('../locales/de/translation.json'),
                el: require('../locales/el/translation.json'),
                es_ES: require('../locales/es-ES/translation.json'),
                es_LA: require('../locales/es-LA/translation.json'),
                et: require('../locales/et/translation.json'),
                fa: require('../locales/fa/translation.json'),
                fi: require('../locales/fi/translation.json'),
                fr: require('../locales/fr/translation.json'),
                he: require('../locales/he/translation.json'),
                hi: require('../locales/hi/translation.json'),
                hr: require('../locales/hr/translation.json'),
                hu: require('../locales/hu/translation.json'),
                id: require('../locales/id/translation.json'),
                it: require('../locales/it/translation.json'),
                ja: require('../locales/ja/translation.json'),
                kn: require('../locales/kn/translation.json'),
                ko: require('../locales/ko/translation.json'),
                lt: require('../locales/lt/translation.json'),
                lv: require('../locales/lv/translation.json'),
                nl: require('../locales/nl/translation.json'),
                no: require('../locales/no/translation.json'),
                pl: require('../locales/pl/translation.json'),
                pt_BR: require('../locales/pt-BR/translation.json'),
                pt_PT: require('../locales/pt-PT/translation.json'),
                ro: require('../locales/ro/translation.json'),
                ru: require('../locales/ru/translation.json'),
                sk: require('../locales/sk/translation.json'),
                sl: require('../locales/sl/translation.json'),
                sr: require('../locales/sr/translation.json'),
                sv_SE: require('../locales/sv-SE/translation.json'),
                ta: require('../locales/ta/translation.json'),
                th: require('../locales/th/translation.json'),
                tr: require('../locales/tr/translation.json'),
                ur: require('../locales/ur/translation.json'),
                vi: require('../locales/vi/translation.json'),
                zh_CN: require('../locales/zh-CN/translation.json'),
                zh_TW: require('../locales/zh-TW/translation.json'),
            },
            interpolation: {
                escapeValue: false,
                format: (value, format) => {
                    if (format === 'uppercase') {
                        return value.toUpperCase();
                    }

                    return value;
                },
            },
            react: {
                wait: false,
                useSuspense: false,
                bindI18n: 'languageChanged loaded',
                bindStore: 'added removed',
                nsMode: 'default',
            },
        },
        (err) => {
            if (err) {
                // eslint-disable-next-line no-console
                console.error(err);
            }
        },
    );
};

export default i18next;
