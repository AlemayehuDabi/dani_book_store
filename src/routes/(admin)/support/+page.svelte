<script lang="ts">
  const threads = [
    { id: '#SUP-102', title: 'Concierge', detail: 'VIP gala curation request', sla: 'Reply in 20m' },
    { id: '#SUP-101', title: 'Wholesale', detail: 'Boutique reorder for fall drop', sla: 'Reply in 1h' },
    { id: '#SUP-100', title: 'Author', detail: 'Signed bookplate logistics', sla: 'Reply in 30m' },
    { id: '#SUP-099', title: 'Community', detail: 'Newsletter collaboration pitch', sla: 'Reply in 4h' }
  ];
</script>

<section class="space-y-8">
  <div class="rounded-[2.5rem] border border-[var(--color-border)]/80 bg-gradient-to-br from-primary-50/90 via-white/85 to-white/80 p-8 shadow-xl dark:from-primary-900/15 dark:bg-white/5">
    <p class="text-xs uppercase tracking-[0.4em] text-primary-500/80">Conversations</p>
    <h1 class="mt-3 text-4xl font-semibold luxury-heading">Support lounge</h1>
    <p class="mt-2 text-sm text-[var(--color-text-secondary)]">Threads from VIP readers, wholesale partners, and authors.</p>
  </div>
  <div class="grid gap-6 md:grid-cols-2">
    {#each threads as thread}
      <div class="rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-5 shadow-lg dark:bg-white/5">
        <p class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">{thread.id}</p>
        <h3 class="mt-2 text-xl font-semibold text-[var(--color-text-primary)]">{thread.title}</h3>
        <p class="mt-2 text-sm text-[var(--color-text-secondary)]">{thread.detail}</p>
        <p class="mt-2 text-xs uppercase tracking-[0.3em] text-primary-500">{thread.sla}</p>
        <button class="mt-4 rounded-3xl border border-[var(--color-border)]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
          Open thread
        </button>
      </div>
    {/each}
  </div>
</section>

