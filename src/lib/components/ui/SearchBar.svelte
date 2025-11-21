<script lang="ts">
  import { Search } from '@lucide/svelte';
  import { createEventDispatcher } from 'svelte';

  export let placeholder = 'Search...';
  export let value = '';
  export let onInput: (value: string) => void = () => {};

  const dispatch = createEventDispatcher<{ input: string }>();

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value;
    onInput(value);
    dispatch('input', value);
  }
</script>

<label class="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white/80 px-4 py-2.5 text-sm shadow-inner shadow-white/70 transition focus-within:border-primary-300 focus-within:shadow-primary-900/10 dark:bg-white/5">
  <Search size={16} class="text-[var(--color-text-secondary)]" />
  <input
    class="w-full border-none bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]/70 focus:outline-none"
    placeholder={placeholder}
    value={value}
    on:input={handleInput}
  />
</label>

