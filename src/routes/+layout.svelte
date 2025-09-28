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
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
