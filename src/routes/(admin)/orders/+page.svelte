<script lang="ts">
  import DataTable from '$lib/components/ui/DataTable.svelte';
  import FilterBar from '$lib/components/ui/FilterBar.svelte';
  import Pagination from '$lib/components/ui/Pagination.svelte';
  import StatCard from '$lib/components/ui/StatCard.svelte';
  import SearchBar from '$lib/components/ui/SearchBar.svelte';
  import { Receipt, Truck, Clock4, RefreshCcw } from '@lucide/svelte';

  const columns = [
    { id: 'id', label: 'Order' },
    { id: 'customer', label: 'Customer' },
    {
      id: 'amount',
      label: 'Amount',
      align: 'right'
    },
    {
      id: 'channel',
      label: 'Channel'
    },
    {
      id: 'status',
      label: 'Status',
      badge: true
    }
  ];

  const orders = [
    { id: '#ORD-9812', customer: 'Ava Solace', amount: '$142', channel: 'Web', status: 'Fulfilled' },
    { id: '#ORD-9811', customer: 'Rare Books & Co.', amount: '$1,130', channel: 'Wholesale', status: 'Processing' },
    { id: '#ORD-9810', customer: 'Noah Mills', amount: '$68', channel: 'Retail', status: 'Shipped' },
    { id: '#ORD-9809', customer: 'Brooklyn Library', amount: '$896', channel: 'Wholesale', status: 'Fulfilled' },
    { id: '#ORD-9808', customer: 'Matilde Grey', amount: '$54', channel: 'Events', status: 'Pending' }
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Processing', value: 'processing' },
    { label: 'Fulfilled', value: 'fulfilled' },
    { label: 'Wholesale', value: 'wholesale' }
  ];

  let activeFilter = 'all';
  let page = 1;
  let search = '';

  $: filtered = orders.filter((order) => {
    const matchesSearch = order.customer.toLowerCase().includes(search.toLowerCase()) || order.id.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      activeFilter === 'all'
        ? true
        : activeFilter === 'wholesale'
          ? order.channel === 'Wholesale'
          : order.status.toLowerCase() === activeFilter;
    return matchesSearch && matchesFilter;
  });
</script>

<section class="space-y-8">
  <div class="rounded-[2.5rem] border border-[var(--color-border)]/80 bg-gradient-to-br from-primary-50/90 via-white/90 to-white/80 p-8 shadow-xl dark:from-primary-900/20 dark:bg-white/5">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p class="text-xs uppercase tracking-[0.4em] text-primary-500/80">Fulfillment control</p>
        <h1 class="mt-3 text-4xl font-semibold luxury-heading text-[var(--color-text-primary)]">Orders & logistics</h1>
        <p class="mt-2 text-sm text-[var(--color-text-secondary)]">Monitor payments routing, shipping milestones, and wholesale SLAs.</p>
      </div>
      <button class="rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-primary-900/20">
        Create manual order
      </button>
    </div>

    <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Open orders" value="128" delta="12 SLA risk" trend="down" icon={Receipt} accent="secondary" />
      <StatCard title="Fulfillment rate" value="94%" delta="+2% vs LW" trend="up" icon={Truck} />
      <StatCard title="Avg. delivery" value="1.8 days" delta="-0.4d faster" trend="up" icon={Clock4} accent="secondary" />
      <StatCard title="Returns" value="0.6%" delta="-18% vs avg" trend="up" icon={RefreshCcw} />
    </div>
  </div>

  <div class="rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-lg dark:bg-white/5">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <SearchBar placeholder="Search orders or customers..." bind:value={search} />
      <FilterBar {filters} bind:active={activeFilter} />
    </div>
  </div>

  <DataTable columns={columns} rows={filtered} />

  <div class="flex justify-end">
    <Pagination bind:page total={Math.max(1, Math.ceil(filtered.length / 10))} />
  </div>
</section>
