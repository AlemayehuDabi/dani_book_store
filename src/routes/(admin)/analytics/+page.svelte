<script lang="ts">
  import AreaChart from '$lib/components/charts/AreaChart.svelte';
  import DonutChart from '$lib/components/charts/DonutChart.svelte';
  import Card from '$lib/components/ui/Card.svelte';

  const engagementSeries = [
    { name: 'Sessions', data: [1200, 1380, 1420, 1800, 1620, 1980, 2100] },
    { name: 'Conversion', data: [3.2, 3.5, 3.9, 4.1, 4.3, 4.5, 4.8] }
  ];
</script>

<section class="space-y-8">
  <div class="rounded-[2.5rem] border border-[var(--color-border)]/80 bg-gradient-to-br from-primary-50/90 via-white/85 to-white/80 p-8 shadow-xl dark:from-primary-900/15 dark:bg-white/5">
    <p class="text-xs uppercase tracking-[0.4em] text-primary-500/80">Insights</p>
    <h1 class="mt-3 text-4xl font-semibold luxury-heading">Analytics atelier</h1>
    <p class="mt-2 text-sm text-[var(--color-text-secondary)]">Realtime telemetry for every shelf, channel, and VIP story.</p>
  </div>

  <div class="grid gap-6 lg:grid-cols-[2fr,1fr]">
    <div class="rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-xl dark:bg-white/5">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Engagement</p>
          <h3 class="mt-2 text-2xl font-semibold">Sessions & conversion</h3>
        </div>
        <select class="rounded-3xl border border-[var(--color-border)]/80 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
      </div>
      <AreaChart categories={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} series={engagementSeries} />
    </div>
    <div class="rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-xl dark:bg-white/5">
      <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Acquisition</p>
      <h3 class="mt-2 text-2xl font-semibold">Channel blend</h3>
      <DonutChart labels={['Organic', 'Newsletter', 'Events', 'Partnerships']} series={[44, 30, 16, 10]} />
    </div>
  </div>

  <div class="grid gap-4 md:grid-cols-3">
    <Card title="EMAIL CTR" subtitle="38%" description="We love warm, editorial copy." accent="soft" />
    <Card title="SOCIAL SAVE RATE" subtitle="12.4%" description="Carousels > static posts." />
    <Card title="VIP RSVP" subtitle="88%" description="Guest lists confirmed for the weekend." accent="glass" />
  </div>
</section>

