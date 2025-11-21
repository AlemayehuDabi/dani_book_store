<script lang="ts">
  const alerts = [
    { title: 'VIP customer spent $820 on signed copies', detail: 'Route to concierge for handwritten note.', time: 'Just now', severity: 'high' },
    { title: 'Inventory < 12 for “Rare Botanicals”', detail: 'Trigger restock workflow.', time: '12 min ago', severity: 'medium' },
    { title: 'Author AMA begins in 45 minutes', detail: 'Share promo reels to socials.', time: '32 min ago', severity: 'low' }
  ];
</script>

<section class="space-y-8">
  <div class="rounded-[2.5rem] border border-[var(--color-border)]/80 bg-gradient-to-br from-primary-50/80 via-white/85 to-white/80 p-8 shadow-xl dark:from-primary-900/15 dark:bg-white/5">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p class="text-xs uppercase tracking-[0.4em] text-primary-500/80">Signals</p>
        <h1 class="mt-3 text-4xl font-semibold luxury-heading">Notification center</h1>
        <p class="mt-2 text-sm text-[var(--color-text-secondary)]">Every critical pulse of the bookstore, orchestrated.</p>
      </div>
      <button class="rounded-3xl border border-[var(--color-border)]/80 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
        Quiet hours
      </button>
    </div>
  </div>

  <div class="grid gap-6 lg:grid-cols-[2fr,1fr]">
    <div class="space-y-4 rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-xl dark:bg-white/5">
      {#each alerts as alert}
        <div class="rounded-3xl border border-[var(--color-border)]/60 bg-[var(--color-bg-muted)]/50 p-4">
          <div class="flex items-center justify-between">
            <p class="text-sm font-semibold text-[var(--color-text-primary)]">{alert.title}</p>
            <span class={`text-xs uppercase tracking-[0.3em] ${alert.severity === 'high' ? 'text-rose-500' : alert.severity === 'medium' ? 'text-amber-600' : 'text-[var(--color-text-secondary)]'}`}>
              {alert.time}
            </span>
          </div>
          <p class="mt-2 text-sm text-[var(--color-text-secondary)]">{alert.detail}</p>
        </div>
      {/each}
    </div>
    <div class="rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 text-sm shadow-xl dark:bg-white/5">
      <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Channels</p>
      <ul class="mt-4 space-y-4">
        {#each ['Email studio', 'Slack ops', 'SMS founders', 'Push mobile'] as channel}
          <li class="flex items-center justify-between rounded-2xl border border-[var(--color-border)]/70 px-4 py-3">
            <span class="font-semibold text-[var(--color-text-primary)]">{channel}</span>
            <input type="checkbox" checked class="h-5 w-5 rounded-full border-primary-400 text-primary-600 focus:ring-primary-200" />
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

