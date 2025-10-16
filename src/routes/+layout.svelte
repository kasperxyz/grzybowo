<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { locale } from 'svelte-i18n';
	import '$lib/i18n.js';
	import '../app.css';

	let { children, data } = $props();
	
	$effect(() => {
		if (data?.locale) {
			locale.set(data.locale);
		}
	});
</script>

<svelte:head>
	<title>Grzybowo - Luksusowe Domki Wakacyjne | Morze Bałtyckie</title>
	<meta name="description" content="Odkryj luksusowe domki wakacyjne w Grzybowie nad Morzem Bałtyckim. Nowoczesne, w pełni wyposażone domy idealne dla rodzin i grup. Zarezerwuj swoje wymarzone wakacje już dziś." />
	<meta name="keywords" content="Grzybowo, wynajem wakacyjny, Morze Bałtyckie, Polska, dom wakacyjny, noclegi" />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content="Grzybowo - Luksusowe Domki Wakacyjne" />
	<meta property="og:description" content="Odkryj luksusowe domki wakacyjne w Grzybowie nad Morzem Bałtyckim. Nowoczesne, w pełni wyposażone domy idealne dla rodzin i grup." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://grzybowo.com" />
	<link rel="canonical" href="https://grzybowo.com" />
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
