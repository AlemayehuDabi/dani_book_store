<script lang="ts">
  export type Filter = {
    label: string;
    value: string;
  };

  export let filters: Filter[] = [];
  export let active = '';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher<{ change: string }>();

  function select(value: string) {
    active = value;
    dispatch('change', value);
  }
</script>

<div class="flex flex-wrap gap-2">
  {#each filters as filter}
    <button
      class={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
        active === filter.value
          ? 'border-primary-400 bg-primary-500/10 text-primary-700 dark:text-primary-200'
          : 'border-transparent bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)] hover:border-primary-200 hover:text-primary-700 dark:bg-white/5'
      }`}
      on:click={() => select(filter.value)}
    >
      {filter.label}
    </button>
  {/each}
</div>

