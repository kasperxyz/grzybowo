import { locale } from 'svelte-i18n';

export async function load({ url }) {
  // Only set Polish locale for the root route
  // Language-specific routes will override this in their own layouts
  if (url.pathname === '/') {
    return {
      locale: 'pl'
    };
  }
  return {};
}