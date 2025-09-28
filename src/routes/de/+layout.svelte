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

{@render children?.()}