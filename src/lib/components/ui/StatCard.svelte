<script lang="ts">
  import type { ComponentType } from 'svelte';

  export let title = '';
  export let value: string | number = '';
  export let delta = '';
  export let trend: 'up' | 'down' | 'neutral' = 'neutral';
  export let icon: ComponentType | null = null;
  export let accent: 'primary' | 'secondary' | 'glass' = 'glass';
</script>

<div
  class={`relative overflow-hidden rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
    accent === 'primary'
      ? 'border-primary-300/70 bg-gradient-to-br from-primary-500 to-primary-700 text-white'
      : accent === 'secondary'
        ? 'border-[var(--color-border)]/80 bg-[var(--color-bg-muted)]/90 text-[var(--color-text-primary)]'
        : 'border-[var(--color-border)]/70 bg-white/90 text-[var(--color-text-primary)] dark:bg-white/5'
  }`}
>
  {#if icon}
    <div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/40 bg-white/20 text-white dark:border-white/10">
      <svelte:component this={icon} size={20} />
    </div>
  {/if}

  <p class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]/80">
    {title}
  </p>
  <p class="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
  {#if delta}
    <p
      class={`mt-2 text-sm font-medium ${
        trend === 'up'
          ? 'text-emerald-500'
          : trend === 'down'
            ? 'text-rose-500'
            : 'text-[var(--color-text-secondary)]'
      }`}
    >
      {delta}
    </p>
  {/if}
  <slot />
</div>

