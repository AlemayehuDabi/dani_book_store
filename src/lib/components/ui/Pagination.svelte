<script lang="ts">
  import { ChevronLeft, ChevronRight } from '@lucide/svelte';
  import { createEventDispatcher } from 'svelte';

  export let page = 1;
  export let total = 1;

  const dispatch = createEventDispatcher<{ change: number }>();

  function goTo(newPage: number) {
    if (newPage < 1 || newPage > total) return;
    page = newPage;
    dispatch('change', page);
  }
</script>

<div class="flex flex-wrap items-center gap-3 rounded-2xl border border-[var(--color-border)]/70 bg-white/80 px-4 py-2 text-sm shadow-sm dark:bg-white/5">
  <button
    class="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-[var(--color-border)]/70 text-[var(--color-text-secondary)] transition hover:border-primary-200 hover:text-primary-600"
    on:click={() => goTo(page - 1)}
    disabled={page === 1}
  >
    <ChevronLeft size={16} />
  </button>

  <div class="inline-flex items-center gap-2 rounded-2xl bg-[var(--color-bg-muted)]/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]/70">
    Page {page} / {total}
  </div>

  <button
    class="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-[var(--color-border)]/70 text-[var(--color-text-secondary)] transition hover:border-primary-200 hover:text-primary-600"
    on:click={() => goTo(page + 1)}
    disabled={page === total}
  >
    <ChevronRight size={16} />
  </button>
</div>

