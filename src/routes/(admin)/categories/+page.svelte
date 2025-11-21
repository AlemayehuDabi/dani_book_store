<script lang="ts">
  import Card from '$lib/components/ui/Card.svelte';
  import FilterBar from '$lib/components/ui/FilterBar.svelte';
  import { Paintbrush, Layers, Tag, Palette } from '@lucide/svelte';

  const categories = [
    {
      name: 'Literary fiction',
      share: '28%',
      growth: '+6.4%',
      titles: 312,
      tone: 'glass'
    },
    {
      name: 'Design & Art',
      share: '17%',
      growth: '+3.1%',
      titles: 118,
      tone: 'soft'
    },
    {
      name: 'Business',
      share: '21%',
      growth: '+1.4%',
      titles: 202,
      tone: 'glass'
    },
    {
      name: 'Rare & Signed',
      share: '9%',
      growth: '+11.2%',
      titles: 46,
      tone: 'solid'
    }
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'High conversion', value: 'high' },
    { label: 'Needs curation', value: 'curation' },
    { label: 'Seasonal', value: 'seasonal' }
  ];

  let active = 'all';
</script>

<section class="space-y-8">
  <div class="rounded-[2.5rem] border border-[var(--color-border)]/80 bg-gradient-to-br from-primary-50/70 via-white/80 to-white/70 p-8 shadow-xl dark:from-primary-900/15 dark:bg-white/5">
    <div class="flex flex-wrap items-start justify-between gap-6">
      <div>
        <p class="text-xs uppercase tracking-[0.4em] text-primary-500/80">Collections</p>
        <h1 class="mt-3 text-4xl font-semibold luxury-heading">Category architecture</h1>
        <p class="mt-2 text-sm text-[var(--color-text-secondary)]">
          Align shelving with demand signals, pair editorial mood boards with live analytics, and orchestrate upcoming drops.
        </p>
      </div>
      <button class="rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-primary-900/20">
        Launch capsule
      </button>
    </div>
  </div>

  <div class="rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-lg dark:bg-white/5">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Filters</p>
      <FilterBar {filters} bind:active={active} />
    </div>
  </div>

  <div class="grid gap-6 md:grid-cols-2">
    {#each categories as category}
      <Card title="SHELF SHARE" subtitle={category.share} description={`${category.titles} curated titles`} accent={category.tone === 'solid' ? 'solid' : category.tone === 'soft' ? 'soft' : 'glass'}>
        <div class="mt-6 flex items-center justify-between text-sm">
          <div>
            <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Momentum</p>
            <p class="text-lg font-semibold">{category.growth}</p>
          </div>
          <div class="rounded-2xl border border-white/40 bg-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
            {category.name}
          </div>
        </div>
      </Card>
    {/each}
  </div>

  <div class="rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-lg dark:bg-white/5">
    <div class="flex flex-wrap items-center justify-between">
      <div>
        <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Palette moodboards</p>
        <h3 class="mt-2 text-2xl font-semibold">Upcoming seasonal edits</h3>
      </div>
      <button class="rounded-3xl border border-[var(--color-border)]/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Open canvas</button>
    </div>
    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {#each ['Winter Salon', 'Desert Modernism', 'Noir Evenings', 'Future Poetics'] as capsule, index}
        <div class="rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-bg-muted)]/50 p-4 text-sm">
          <div class="flex items-center justify-between">
            <p class="font-semibold text-[var(--color-text-primary)]">{capsule}</p>
            {#if index === 0}
              <Paintbrush size={16} />
            {:else if index === 1}
              <Layers size={16} />
            {:else if index === 2}
              <Tag size={16} />
            {:else}
              <Palette size={16} />
            {/if}
          </div>
          <p class="mt-2 text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Launch {index + 1} wk</p>
        </div>
      {/each}
    </div>
  </div>
</section>

