import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import en from './translations/en.json';
import pl from './translations/pl.json';
import de from './translations/de.json';

addMessages('en', en);
addMessages('pl', pl);
addMessages('de', de);

init({
  fallbackLocale: 'pl',
  initialLocale: 'pl',
});

export const availableLanguages = {
  pl: 'Polski',
  en: 'English', 
  de: 'Deutsch'
};

export const languageRoutes = {
  pl: '/',
  en: '/en',
  de: '/de'
};