<script lang="ts">
  export let title = '';
  export let subtitle = '';
  export let description = '';
  export let accent: 'soft' | 'glass' | 'solid' = 'glass';
</script>

<div
  class={`group relative overflow-hidden rounded-3xl border border-[var(--color-border)]/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
    accent === 'solid'
      ? 'bg-gradient-to-br from-primary-500/90 to-primary-700/80 text-white'
      : accent === 'soft'
        ? 'bg-[var(--color-bg-muted)]/80 text-[var(--color-text-primary)]'
        : 'bg-white/90 text-[var(--color-text-primary)] dark:bg-white/5'
  }`}
>
  <div class="absolute right-4 top-4 text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]/40">
    {accent === 'solid' ? 'PRIME' : 'INSIGHT'}
  </div>
  <p class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]/70">
    {title}
  </p>
  <p class="mt-3 text-3xl font-semibold tracking-tight">{subtitle}</p>
  {#if description}
    <p class="mt-2 text-sm text-[var(--color-text-secondary)]/80">{description}</p>
  {/if}
  <slot />
</div>