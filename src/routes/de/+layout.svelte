<script lang="ts">
  import { locale } from 'svelte-i18n';
  import '$lib/i18n.js';
  
  let { data, children } = $props();
  
  $effect(() => {
    if (data?.locale) {
      locale.set(data.locale);
    }
  });
</script>

<svelte:head>
	<title>Grzybowo - Luxus Ferienhäuser | Ostsee</title>
	<meta name="description" content="Erleben Sie luxuriöse Ferienvermietungen in Grzybowo an der Ostsee. Moderne, voll ausgestattete Häuser perfekt für Familien und Gruppen. Buchen Sie Ihren Traumurlaub heute." />
	<meta name="keywords" content="Grzybowo, Ferienvermietung, Ostsee, Polen, Ferienhaus, Unterkunft" />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content="Grzybowo - Luxus Ferienhäuser" />
	<meta property="og:description" content="Erleben Sie luxuriöse Ferienvermietungen in Grzybowo an der Ostsee. Moderne, voll ausgestattete Häuser perfekt für Familien und Gruppen." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://grzybowo.com/de" />
	<link rel="canonical" href="https://grzybowo.com/de" />
</svelte:head>

{@render children?.()}