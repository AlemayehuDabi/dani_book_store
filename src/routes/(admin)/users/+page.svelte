<script lang="ts">
  import DataTable from '$lib/components/ui/DataTable.svelte';
  import SearchBar from '$lib/components/ui/SearchBar.svelte';
  import FilterBar from '$lib/components/ui/FilterBar.svelte';
  import StatCard from '$lib/components/ui/StatCard.svelte';
  import { Users, Sparkles, Crown, Shield } from '@lucide/svelte';

  const columns = [
    { id: 'name', label: 'Reader' },
    { id: 'tier', label: 'Tier' },
    { id: 'email', label: 'Email' },
    { id: 'lifetimeValue', label: 'LTV', align: 'right' },
    { id: 'status', label: 'Status', badge: true }
  ];

  const rows = [
    { id: 1, name: 'Selene Hart', tier: 'Bibliophile', email: 'selene@atelier.studio', lifetimeValue: '$1,820', status: 'VIP' },
    { id: 2, name: 'Parker Lane', tier: 'Insider', email: 'parker@lane.co', lifetimeValue: '$640', status: 'Active' },
    { id: 3, name: 'Lucia Barnes', tier: 'Collector', email: 'lucia@viacollective.com', lifetimeValue: '$3,120', status: 'VIP' },
    { id: 4, name: 'Hudson Rye', tier: 'Member', email: 'hudson@studiorye.com', lifetimeValue: '$210', status: 'Churn risk' }
  ];

  const filters = [
    { label: 'All readers', value: 'all' },
    { label: 'VIP / Collector', value: 'vip' },
    { label: 'Churn risk', value: 'risk' },
    { label: 'New this week', value: 'new' }
  ];

  let search = '';
  let activeFilter = 'all';

  $: filteredRows = rows.filter((row) => {
    const matchesSearch = row.name.toLowerCase().includes(search.toLowerCase()) || row.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      activeFilter === 'all'
        ? true
        : activeFilter === 'vip'
          ? row.status === 'VIP'
          : activeFilter === 'risk'
            ? row.status === 'Churn risk'
            : activeFilter === 'new'
              ? row.id > 10
              : true;
    return matchesSearch && matchesFilter;
  });
</script>

<section class="space-y-8">
  <div class="rounded-[2.5rem] border border-[var(--color-border)]/80 bg-gradient-to-br from-primary-50/90 via-white/90 to-white/80 p-8 shadow-xl dark:from-primary-900/20 dark:bg-white/5">
    <div class="flex flex-wrap items-start justify-between gap-6">
      <div>
        <p class="text-xs uppercase tracking-[0.4em] text-primary-500">Readers</p>
        <h1 class="mt-3 text-4xl font-semibold luxury-heading">Audience intelligence</h1>
        <p class="mt-2 text-sm text-[var(--color-text-secondary)]">
          Segment members, understand loyalty signals, and orchestrate invite-only drops.
        </p>
      </div>
      <button class="rounded-3xl border border-[var(--color-border)]/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
        Invite new reader
      </button>
    </div>
    <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Members" value="18,420" delta="+320 today" trend="up" icon={Users} />
      <StatCard title="VIP share" value="12%" delta="+3% MoM" trend="up" icon={Crown} accent="secondary" />
      <StatCard title="Net retention" value="142%" delta="+8 pts" trend="up" icon={Shield} />
      <StatCard title="Waitlist" value="2,480" delta="+190 invites" trend="up" icon={Sparkles} accent="secondary" />
    </div>
  </div>

  <div class="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-lg dark:bg-white/5">
    <SearchBar placeholder="Search people, emails, tiers..." bind:value={search} />
    <FilterBar {filters} bind:active={activeFilter} />
  </div>

  <DataTable columns={columns} rows={filteredRows} />
</section>

