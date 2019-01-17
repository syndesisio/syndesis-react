import i18n, { InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en, it } from './locales';

const options = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  debug: false,

  resources: {
    en: {
      app: en.en.app,
      connections: en.en.modules.connections,
      customizations: en.en.modules.customizations,
      dashboard: en.en.modules.dashboard,
      integrations: en.en.modules.integrations,
      shared: en.en.shared,
    },
    it: {
      app: it.it.app,
      connections: it.it.modules.connections,
      customizations: it.it.modules.customizations,
      dashboard: it.it.modules.dashboard,
      integrations: it.it.modules.integrations,
      shared: it.it.shared,
    },
  },

  defaultNS: 'shared',
  fallbackLng: process.env.NODE_ENV === 'production' ? 'en' : 'it',
  fallbackNS: ['shared'],
  keySeparator: '.',
  ns: ['shared', 'app', 'customizations', 'dashboard'],
} as InitOptions;

i18n.use(LanguageDetector).init(options);
export default i18n;