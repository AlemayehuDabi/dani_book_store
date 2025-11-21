<script lang="ts">
  import StatCard from '$lib/components/ui/StatCard.svelte';
  import DataTable from '$lib/components/ui/DataTable.svelte';
  import DonutChart from '$lib/components/charts/DonutChart.svelte';
  import { CreditCard, Wallet, Lock, Activity } from '@lucide/svelte';

  const payoutRows = [
    { id: '#SET-432', name: 'Stripe', amount: '$24,820', status: 'Cleared' },
    { id: '#SET-431', name: 'PayPal', amount: '$5,120', status: 'Cleared' },
    { id: '#SET-430', name: 'Wire - UK', amount: '$12,400', status: 'Pending' },
    { id: '#SET-429', name: 'Wholesale', amount: '$18,240', status: 'Processing' }
  ];

  const payoutColumns = [
    { id: 'id', label: 'Batch' },
    { id: 'name', label: 'Channel' },
    { id: 'amount', label: 'Amount', align: 'right' },
    { id: 'status', label: 'Status', badge: true }
  ];
</script>

<section class="space-y-8">
  <div class="rounded-[2.5rem] border border-[var(--color-border)]/70 bg-gradient-to-br from-primary-50/90 via-white/95 to-white/85 p-8 shadow-2xl shadow-primary-900/20 dark:from-primary-900/20 dark:bg-white/5">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p class="text-xs uppercase tracking-[0.4em] text-primary-500">Liquidity</p>
        <h1 class="mt-3 text-4xl font-semibold luxury-heading">Payments & treasury</h1>
        <p class="mt-2 text-sm text-[var(--color-text-secondary)]">Crystal-clear visibility across settlement pipelines, payouts, and author royalties.</p>
      </div>
      <button class="rounded-3xl border border-[var(--color-border)]/80 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
        Schedule payout
      </button>
    </div>

    <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Cash on hand" value="$182K" delta="+$28K today" trend="up" icon={Wallet} />
      <StatCard title="Unsettled" value="$42K" delta="-12% WoW" trend="up" icon={CreditCard} accent="secondary" />
      <StatCard title="Failed payments" value="0.4%" delta="-0.2 pts" trend="up" icon={Lock} />
      <StatCard title="Royalties" value="$18.2K" delta="Payout tomorrow" trend="neutral" icon={Activity} accent="secondary" />
    </div>
  </div>

  <div class="grid gap-8 lg:grid-cols-[2fr,1fr]">
    <div class="rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-xl dark:bg-white/5">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Settlement queue</p>
          <h3 class="mt-2 text-2xl font-semibold">Upcoming payouts</h3>
        </div>
        <button class="rounded-3xl border border-[var(--color-border)]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">View ledger</button>
      </div>
      <div class="mt-6">
        <DataTable columns={payoutColumns} rows={payoutRows} />
      </div>
    </div>
    <div class="rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-xl dark:bg-white/5">
      <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Channel split</p>
      <h3 class="mt-2 text-2xl font-semibold">Payments mix</h3>
      <DonutChart labels={['Stripe', 'Wholesale', 'Events', 'PayPal']} series={[58, 24, 10, 8]} />
    </div>
  </div>
</section>

