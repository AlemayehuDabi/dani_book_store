<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { Sun, Moon } from '@lucide/svelte';
  import { onDestroy } from 'svelte';

  let currentTheme: 'light' | 'dark' = 'light';
  const unsubscribe = theme.subscribe((value) => {
    currentTheme = value;
  });

  function toggleTheme() {
    theme.toggle();
  }

  $: icon = currentTheme === 'dark' ? Sun : Moon;

  onDestroy(() => {
    unsubscribe();
  });
</script>

<button
  class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-border)]/80 bg-white/80 text-[var(--color-text-secondary)] shadow-sm backdrop-blur hover:border-primary-300 hover:text-primary-600 dark:bg-white/5 dark:text-[var(--color-text-secondary)]"
  on:click={toggleTheme}
  aria-label="Toggle theme"
>
  <svelte:component this={icon} size={18} stroke-width={1.5} />
</button>

