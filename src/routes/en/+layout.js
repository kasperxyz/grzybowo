import { locale } from 'svelte-i18n';

export async function load({ params }) {
  return {
    locale: 'en'
  };
}