<script lang="ts">
  import { ChevronDown, ChevronUp } from '@lucide/svelte';
  import { fade } from 'svelte/transition';

  export type Column = {
    id: string;
    label: string;
    align?: 'left' | 'center' | 'right';
    badge?: boolean;
    format?: (value: unknown, row: Record<string, unknown>) => string;
  };

  export let columns: Column[] = [];
  export let rows: Record<string, unknown>[] = [];
  export let emptyMessage = 'No data available yet.';
  export let sortable = true;
  export let initialSort: { id: string; direction: 'asc' | 'desc' } | null = null;

  let sortState = initialSort;

  const sortedRows = () => {
    if (!sortState) return rows;
    const { id, direction } = sortState;
    return [...rows].sort((a, b) => {
      const av = a[id];
      const bv = b[id];
      if (av === bv) return 0;
      if (av === undefined || av === null) return 1;
      if (bv === undefined || bv === null) return -1;
      if (typeof av === 'number' && typeof bv === 'number') {
        return direction === 'asc' ? av - bv : bv - av;
      }
      return direction === 'asc'
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
  };

  function toggleSort(columnId: string) {
    if (!sortable) return;
    if (!sortState || sortState.id !== columnId) {
      sortState = { id: columnId, direction: 'asc' };
    } else {
      sortState =
        sortState.direction === 'asc'
          ? { id: columnId, direction: 'desc' }
          : null;
    }
  }
</script>

<div class="overflow-hidden rounded-3xl border border-[var(--color-border)]/80 bg-[var(--color-bg-base)]/90 shadow-xl shadow-primary-900/5">
  <table class="min-w-full divide-y divide-[var(--color-border)]/70">
    <thead class="bg-[var(--color-bg-muted)]/80 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]/80">
      <tr>
        {#each columns as column (column.id)}
          <th
            class={`px-5 py-4 select-none ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}`}
            role="button"
            on:click={() => toggleSort(column.id)}
          >
            <span class="inline-flex items-center gap-1.5 text-[0.68rem]">
              {column.label}
              {#if sortState?.id === column.id}
                {#if sortState.direction === 'asc'}
                  <ChevronUp size={14} />
                {:else}
                  <ChevronDown size={14} />
                {/if}
              {/if}
            </span>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class="divide-y divide-[var(--color-border)]/60 text-sm">
      {#if rows.length === 0}
        <tr>
          <td class="px-6 py-12 text-center text-sm text-[var(--color-text-secondary)]" colspan={columns.length}>
            {emptyMessage}
          </td>
        </tr>
      {:else}
        {#each sortedRows() as row (row.id ?? JSON.stringify(row))}
          <tr class="group transition hover:bg-primary-50/60 dark:hover:bg-white/5">
            {#each columns as column (column.id)}
              <td class={`px-5 py-4 ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'} text-[var(--color-text-primary)]`}>
                {#if column.badge}
                  <span class="inline-flex items-center gap-2 rounded-full border border-primary-100/70 bg-primary-50/70 px-3 py-1 text-xs font-medium text-primary-700 dark:border-primary-700/60 dark:bg-primary-900/20 dark:text-primary-200">
                    {#if typeof column.format === 'function'}
                      {column.format(row[column.id], row)}
                    {:else}
                      {row[column.id] ?? '—'}
                    {/if}
                  </span>
                {:else}
                  {#if typeof column.format === 'function'}
                    {column.format(row[column.id], row)}
                  {:else}
                    {row[column.id] ?? '—'}
                  {/if}
                {/if}
              </td>
            {/each}
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>

