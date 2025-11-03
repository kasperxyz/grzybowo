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

	<!-- Google Analytics 4 - hardcoded measurement ID -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y19L1PTT2W"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}gtag('js', new Date());
		gtag('config','G-Y19L1PTT2W',{anonymize_ip:true});
	</script>

	<!-- Minimal JSON-LD structured data -->
	{@html `<!-- JSON-LD -->\n<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "TouristAccommodation",
		"name": "Grzybowo Vacation Rentals",
		"description": "Luxury vacation rental houses in Grzybowo by the Baltic Sea.",
		"url": "https://grzybowo.com",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Grzybowo",
			"addressCountry": "PL"
		},
		"telephone": "+48-000-000-000",
		"priceRange": "$$",
		"openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
	})}</script>`}
</svelte:head>

{@render children?.()}
