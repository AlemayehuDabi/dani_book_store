<script lang="ts">
  import { Command, Bell, Filter, Search, Menu, BadgeCheck, ChevronDown } from '@lucide/svelte';
  import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';
  import { spring } from 'svelte/motion';
  import { sidebarOpen } from '$lib/stores/sidebar';

  let query = '';
  const tags = ['All', 'Bestsellers', 'Low stock', 'Pre-order', 'VIP'];

  const focusProgress = spring(0, {
    stiffness: 0.2,
    damping: 0.4
  });

  function handleFocus() {
    focusProgress.set(1, { hard: true });
  }

  function handleBlur() {
    focusProgress.set(0, { hard: true });
  }
</script>

<header class="sticky top-0 z-20 border-b border-[var(--color-border)]/70 bg-[var(--color-bg-base)]/80 backdrop-blur-xl">
  <div class="flex h-20 items-center justify-between gap-4 px-4 lg:px-10">
    <div class="flex flex-1 items-center gap-4">
      <button 
        class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-border)]/80 text-[var(--color-text-secondary)] shadow-sm transition hover:border-primary-200 hover:text-primary-600 lg:hidden"
        on:click={() => $sidebarOpen = !$sidebarOpen}
        aria-label="Toggle menu"
      >
        <Menu size={18} />
      </button>
      <div class="hidden lg:flex items-center gap-3 rounded-2xl border border-[var(--color-border)]/80 bg-[var(--color-bg-muted)]/60 px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] shadow-inner shadow-white/60">
        <Command size={15} />
        Quick switch
      </div>
      <div class="relative flex-1">
        <label class="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white/90 px-4 py-2.5 text-sm shadow-sm transition focus-within:border-primary-200 focus-within:shadow-primary-900/10 dark:bg-white/5">
          <Search size={17} class="text-[var(--color-text-secondary)]" />
          <input
            bind:value={query}
            class="w-full border-none bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]/60 focus:outline-none"
            placeholder="Search books, readers, orders, payouts..."
            on:focus={handleFocus}
            on:blur={handleBlur}
          />
          <span class="rounded-xl bg-[var(--color-bg-muted)] px-2 py-1 text-[0.7rem] text-[var(--color-text-secondary)]/80">⌘ + K</span>
        </label>
        <div
          class="pointer-events-none absolute inset-x-4 -bottom-1 h-1 rounded-full bg-gradient-to-r from-transparent via-primary-400/40 to-transparent opacity-0 transition"
          style:opacity={$focusProgress}></div>
      </div>
    </div>

    <div class="flex items-center gap-3">
      <div class="hidden md:flex items-center gap-2 rounded-2xl border border-[var(--color-border)]/80 px-3 py-1 text-xs font-semibold text-[var(--color-text-secondary)]/80">
        <BadgeCheck size={14} />
        Synced 2m ago
      </div>
      <button class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-border)]/80 bg-white/90 text-[var(--color-text-secondary)] shadow-sm transition hover:border-primary-200 hover:text-primary-600 dark:bg-white/5">
        <Filter size={16} />
      </button>
      <button class="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-border)]/80 bg-white/90 text-[var(--color-text-secondary)] shadow-sm transition hover:border-primary-200 hover:text-primary-600 dark:bg-white/5">
        <Bell size={16} />
        <span class="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary-500 text-[0.65rem] font-semibold text-white">3</span>
      </button>
      <ThemeToggle />
      <button class="flex items-center gap-3 rounded-2xl border border-[var(--color-border)]/80 bg-white/80 px-3 py-1 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lg dark:bg-white/5">
        <img
          src="https://images.unsplash.com/photo-1504593811423-6dd665756598?w=120&h=120&auto=format&fit=crop"
          alt="Profile"
          class="h-11 w-11 rounded-2xl object-cover"
        />
        <div class="hidden text-left lg:block">
          <p class="text-sm font-semibold text-[var(--color-text-primary)]">Alya Bennett</p>
          <p class="text-xs text-[var(--color-text-secondary)]">Admin</p>
        </div>
        <ChevronDown size={16} class="hidden text-[var(--color-text-secondary)] lg:block" />
      </button>
    </div>
  </div>

  <div class="hidden border-t border-[var(--color-border)]/60 px-4 py-3 lg:block">
    <div class="flex flex-wrap items-center gap-2">
      {#each tags as tag}
        <button class="rounded-full border border-transparent bg-[var(--color-bg-muted)] px-4 py-1 text-xs font-semibold text-[var(--color-text-secondary)] transition hover:-translate-y-0.5 hover:border-primary-200 hover:bg-primary-50/80 hover:text-primary-700 dark:bg-white/5 dark:hover:bg-white/10">
          {tag}
        </button>
      {/each}
    </div>
  </div>
</header>