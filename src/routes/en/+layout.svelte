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

{@render children?.()}