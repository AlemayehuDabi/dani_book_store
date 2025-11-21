<script lang="ts">
  import StatCard from '$lib/components/ui/StatCard.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import DataTable from '$lib/components/ui/DataTable.svelte';
  import AreaChart from '$lib/components/charts/AreaChart.svelte';
  import DonutChart from '$lib/components/charts/DonutChart.svelte';
  import { Users, ShoppingBag, CreditCard, BookOpenCheck } from '@lucide/svelte';

  const revenueSeries = [
    { name: 'Revenue', data: [22, 35, 30, 42, 38, 55, 61, 70, 64, 73, 75, 82] },
    { name: 'Gross profit', data: [12, 20, 21, 24, 28, 34, 38, 44, 46, 51, 56, 60] }
  ];

  const orders = [
    { id: '#ORD-1083', customer: 'Isabella Young', amount: '$128.00', format: 'Hardcover', status: 'Fulfilled' },
    { id: '#ORD-1082', customer: 'Leo Harrods', amount: '$56.00', format: 'Audible', status: 'Processing' },
    { id: '#ORD-1081', customer: 'Miller & Co.', amount: '$420.00', format: 'B2B', status: 'Fulfilled' },
    { id: '#ORD-1080', customer: 'Norah Vance', amount: '$72.00', format: 'Signed set', status: 'Shipped' }
  ];

  const statusColors = {
    Fulfilled: 'bg-emerald-50 text-emerald-600',
    Processing: 'bg-amber-50 text-amber-600',
    Shipped: 'bg-primary-50 text-primary-600'
  };

  const timeline = [
    { time: '09:24', title: 'VIP private sale launched', detail: 'Invited 400 collectors globally' },
    { time: '11:02', title: 'Inventory sync', detail: 'Warehouse updated 238 units' },
    { time: '13:37', title: 'Author AMA', detail: 'Live Q&A with Matt Haig' },
    { time: '14:10', title: 'Wholesale drop', detail: 'Soho House libraries restocked' }
  ];
</script>

<section class="space-y-10">
  <div class="grid gap-6 lg:grid-cols-[2fr,1fr]">
    <div class="rounded-[2.75rem] border border-[var(--color-border)]/70 bg-gradient-to-br from-primary-50/80 via-white/95 to-white/80 p-8 shadow-2xl shadow-primary-900/20 dark:from-primary-900/20 dark:via-white/5 dark:to-white/5">
      <p class="text-xs uppercase tracking-[0.5em] text-primary-500">Studio pulse</p>
      <div class="mt-4 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 class="text-5xl font-semibold tracking-tight text-[var(--color-text-primary)] luxury-heading">$482K</h1>
          <p class="mt-2 text-sm text-[var(--color-text-secondary)]">Revenue trailing 12 months across retail, wholesale, signed editions.</p>
        </div>
        <div class="rounded-3xl border border-white/70 bg-white/80 px-5 py-3 text-sm font-semibold text-primary-600 shadow-sm dark:border-white/10 dark:bg-white/10">+18.6% vs last quarter</div>
      </div>
      <div class="mt-8">
        <AreaChart categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']} series={revenueSeries} />
      </div>
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <StatCard title="Active readers" value="34,872" delta="+1,294 today" trend="up" icon={Users} />
      <StatCard title="Orders today" value="428" delta="Peak in 2h" trend="neutral" icon={ShoppingBag} accent="secondary" />
      <StatCard title="Avg. order value" value="$86" delta="+4.2%" trend="up" icon={CreditCard} />
      <StatCard title="Titles in print" value="1,248" delta="78 curated" trend="neutral" icon={BookOpenCheck} accent="secondary" />
    </div>
  </div>

  <div class="grid gap-6 xl:grid-cols-[2fr,1fr]">
    <div class="rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-xl dark:bg-white/5">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Orders</p>
          <h3 class="mt-3 text-2xl font-semibold text-[var(--color-text-primary)]">Latest transactions</h3>
        </div>
        <button class="rounded-3xl border border-[var(--color-border)]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">View all</button>
      </div>
      <div class="mt-6 space-y-4">
        {#each orders as order}
          <div class="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-bg-muted)]/40 px-4 py-4 text-sm">
            <div>
              <p class="font-semibold text-[var(--color-text-primary)]">{order.id}</p>
              <p class="text-[var(--color-text-secondary)]">{order.customer}</p>
            </div>
            <p class="font-semibold text-primary-700">{order.amount}</p>
            <p class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">{order.format}</p>
            <span class={`rounded-full px-4 py-1 text-xs font-semibold ${statusColors[order.status]}`}>{order.status}</span>
          </div>
        {/each}
      </div>
    </div>

    <div class="space-y-6">
      <Card title="CHANNEL MIX" subtitle="62% direct" description="Organic traffic dominates" accent="soft">
        <DonutChart labels={['Direct', 'Wholesale', 'Events', 'Digital']} series={[62, 18, 12, 8]} />
      </Card>

      <div class="rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-xl dark:bg-white/5">
        <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Live runway</p>
        <h3 class="mt-3 text-2xl font-semibold">Today's timeline</h3>
        <ul class="mt-4 space-y-4">
          {#each timeline as item}
            <li class="flex gap-4">
              <div class="text-xs font-semibold text-primary-600">{item.time}</div>
              <div class="flex-1">
                <p class="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</p>
                <p class="text-sm text-[var(--color-text-secondary)]">{item.detail}</p>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>

  <div class="rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-xl dark:bg-white/5">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Reader cohorts</p>
        <h3 class="mt-3 text-2xl font-semibold">Engagement heatmap</h3>
      </div>
    </div>
    <div class="mt-6 grid gap-4 md:grid-cols-3">
      {#each ['Archetype A', 'Archetype B', 'Archetype C'] as archetype, idx}
        <div class="rounded-3xl border border-[var(--color-border)]/60 bg-[var(--color-bg-muted)]/60 p-4">
          <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">{archetype}</p>
          <p class="mt-3 text-3xl font-semibold text-[var(--color-text-primary)]">{['72%', '54%', '38%'][idx]}</p>
          <p class="mt-2 text-sm text-[var(--color-text-secondary)]">Conversion this week</p>
        </div>
      {/each}
    </div>
  </div>
</section>
