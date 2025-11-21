<script lang="ts">
  const notificationChannels = [
    { label: 'Email digests', description: 'Daily performance recap, SLA alerts.', value: 'email', enabled: true },
    { label: 'SMS pings', description: 'Critical downtime + celebrity drops.', value: 'sms', enabled: true },
    { label: 'Slack', description: 'Ops #fulfillment, #vip-lounge channels.', value: 'slack', enabled: false }
  ];
</script>

<section class="space-y-8">
  <div class="rounded-[2.5rem] border border-[var(--color-border)]/80 bg-gradient-to-br from-primary-50/80 via-white/85 to-white/80 p-8 shadow-xl dark:from-primary-900/20 dark:bg-white/5">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p class="text-xs uppercase tracking-[0.4em] text-primary-500/80">System</p>
        <h1 class="mt-3 text-4xl font-semibold luxury-heading">Settings & access</h1>
        <p class="mt-2 text-sm text-[var(--color-text-secondary)]">Identity, brand tone, and collaboration guardrails.</p>
      </div>
      <button class="rounded-3xl border border-[var(--color-border)]/80 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Save changes</button>
    </div>
  </div>

  <div class="grid gap-8 lg:grid-cols-2">
    <div class="space-y-6 rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-xl dark:bg-white/5">
      <div>
        <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Brand</p>
        <h3 class="mt-2 text-2xl font-semibold">Identity</h3>
      </div>
      <label class="space-y-2 text-sm">
        <span>Studio name</span>
        <input class="w-full rounded-2xl border border-[var(--color-border)] bg-white/70 px-4 py-3 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 dark:bg-white/5" value="Dani Book Studio" />
      </label>
      <label class="space-y-2 text-sm">
        <span>Support email</span>
        <input class="w-full rounded-2xl border border-[var(--color-border)] bg-white/70 px-4 py-3 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 dark:bg-white/5" value="support@danibook.studio" />
      </label>
      <div class="rounded-3xl border border-dashed border-[var(--color-border)]/80 bg-[var(--color-bg-muted)]/50 p-4 text-sm">
        <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Logo & typography</p>
        <p class="mt-2 text-[var(--color-text-secondary)]">Upload vector lockups and sync with design tokens.</p>
        <button class="mt-3 rounded-3xl border border-[var(--color-border)]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Upload</button>
      </div>
    </div>

    <div class="space-y-6 rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-xl dark:bg-white/5">
      <div>
        <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Collaboration</p>
        <h3 class="mt-2 text-2xl font-semibold">Access controls</h3>
      </div>
      <label class="flex items-center justify-between rounded-3xl border border-[var(--color-border)]/80 bg-[var(--color-bg-muted)]/60 px-4 py-3 text-sm">
        <div>
          <p class="font-semibold">Two-factor authentication</p>
          <p class="text-xs text-[var(--color-text-secondary)]">Required for ops + finance roles.</p>
        </div>
        <input type="checkbox" checked class="h-5 w-5 rounded-full border-primary-400 text-primary-600 focus:ring-primary-200" />
      </label>
      <label class="flex items-center justify-between rounded-3xl border border-[var(--color-border)]/80 bg-[var(--color-bg-muted)]/60 px-4 py-3 text-sm">
        <div>
          <p class="font-semibold">Session length</p>
          <p class="text-xs text-[var(--color-text-secondary)]">Auto logout after 60 minutes idle.</p>
        </div>
        <select class="rounded-2xl border border-[var(--color-border)] bg-white/80 px-3 py-2 text-sm">
          <option>60 min</option>
          <option>90 min</option>
          <option>Never</option>
        </select>
      </label>
      <div class="space-y-3">
        <p class="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">Notifications</p>
        {#each notificationChannels as channel}
          <label class="flex items-center justify-between rounded-3xl border border-[var(--color-border)]/60 bg-white/70 px-4 py-3 text-sm dark:bg-white/5">
            <div>
              <p class="font-semibold">{channel.label}</p>
              <p class="text-xs text-[var(--color-text-secondary)]">{channel.description}</p>
            </div>
            <input type="checkbox" checked={channel.enabled} class="h-5 w-5 rounded-full border-primary-400 text-primary-600 focus:ring-primary-200" />
          </label>
        {/each}
      </div>
    </div>
  </div>
</section>

