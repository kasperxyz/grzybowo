<script lang="ts">
  import { locale } from 'svelte-i18n';
  import '$lib/i18n.js';
  
  let { data, children } = $props();
  
  // Set locale immediately when data changes
  $effect(() => {
    if (data?.locale) {
      locale.set(data.locale);
    }
  });
</script>

<svelte:head>
	<title>Grzybowo - Luxury Vacation Rental Houses | Baltic Sea</title>
	<meta name="description" content="Experience luxury vacation rentals in Grzybowo by the Baltic Sea. Modern, fully-equipped houses perfect for families and groups. Book your dream holiday today." />
	<meta name="keywords" content="Grzybowo, vacation rental, Baltic Sea, Poland, holiday house, accommodation" />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content="Grzybowo - Luxury Vacation Rental Houses" />
	<meta property="og:description" content="Experience luxury vacation rentals in Grzybowo by the Baltic Sea. Modern, fully-equipped houses perfect for families and groups." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://grzybowo.com/en" />
	<link rel="canonical" href="https://grzybowo.com/en" />
</svelte:head>

{@render children?.()}