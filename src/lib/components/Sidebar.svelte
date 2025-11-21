<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import {
    LayoutDashboard,
    Book,
    ShoppingCart,
    Users,
    Tag,
    BarChart3,
    Settings,
    Bell,
    CreditCard,
    Sparkle,
    Layers,
    MessageSquare,
    PlusCircle,
    X
  } from '@lucide/svelte';
  import { fly, slide } from 'svelte/transition';
  import { sidebarOpen } from '$lib/stores/sidebar';

  const navGroups = [
    {
      label: 'Overview',
      items: [
        { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { title: 'Notifications', href: '/notifications', icon: Bell },
        { title: 'Analytics', href: '/analytics', icon: BarChart3 }
      ]
    },
    {
      label: 'Commerce',
      items: [
        { title: 'Books', href: '/books', icon: Book },
        { title: 'Orders', href: '/orders', icon: ShoppingCart },
        { title: 'Users', href: '/users', icon: Users },
        { title: 'Categories', href: '/categories', icon: Layers },
        { title: 'Payments', href: '/payments', icon: CreditCard }
      ]
    },
    {
      label: 'System',
      items: [
        { title: 'Conversations', href: '/support', icon: MessageSquare },
        { title: 'Settings', href: '/settings', icon: Settings }
      ]
    }
  ];

  const isActive = (href: string, currentPath: string) =>
    currentPath === href || currentPath.startsWith(`${href}/`);

  function navigate(href: string) {
    goto(href);
  }
</script>

<!-- Mobile overlay -->
{#if $sidebarOpen}
  <div
    class="fixed inset-0 z-40 bg-black/50 lg:hidden"
    on:click|self={() => $sidebarOpen = false}
    on:keydown|stopPropagation
    role="button"
    tabindex="0"
    transition:fly={{ y: -20, duration: 200 }}
  />
{/if}

<aside
  class="fixed py-4 lg:sticky top-0 left-0 z-50 h-screen w-[17rem] flex-col border-r border-[var(--color-border)]/80 bg-[var(--color-bg-surface)]/95 backdrop-blur-xl transition-transform duration-300 ease-in-out lg:flex lg:translate-x-0 {!$sidebarOpen ? '-translate-x-full' : ''}"
  aria-label="Primary navigation"
  role="navigation"
  in:slide={{ duration: 200 }}
  out:slide={{ duration: 200, reverse: true }}
>
  <div class="flex h-20 items-center justify-between gap-3 px-5">
    <div
      class="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-b from-primary-500 to-primary-700 text-lg font-semibold text-white shadow-xl shadow-primary-900/20"
      on:click={() => navigate('/dashboard')}
      role="button"
      aria-label="Navigate to dashboard"
    >
      DB
    </div>
    <div class="space-y-0.5">
      <p class="text-sm uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Dani</p>
      <p class="text-base font-semibold text-[var(--color-text-primary)]">Book Studio</p>
      <button 
        class="lg:hidden p-2 rounded-lg hover:bg-[var(--color-bg-muted)]"
        on:click={() => $sidebarOpen = false}
        aria-label="Close menu"
      >
        <X size={20} />
      </button>
    </div>
  </div>

  <div class="px-5">
    <div class="rounded-2xl border border-primary-100/70 bg-gradient-to-br from-primary-50/90 to-white/80 p-4 text-sm text-primary-700 shadow-sm dark:border-primary-700/50 dark:from-primary-800/40 dark:to-primary-900/10">
      <p class="text-xs uppercase tracking-[0.2em] text-primary-500/80">Performance</p>
      <p class="mt-1 text-2xl font-semibold">+18%</p>
      <p class="mt-1 text-xs text-primary-700/80">vs last 30 days</p>
      <button
        class="mt-3 inline-flex items-center gap-2 rounded-full border border-primary-200/80 px-3 py-1 text-xs font-semibold text-primary-700 transition hover:-translate-y-0.5 hover:bg-primary-50/70 dark:border-primary-600/60 dark:text-primary-200"
        on:click={() => navigate('/analytics')}
      >
        <Sparkle size={14} /> Boost insights
      </button>
    </div>
  </div>

  <nav class="mt-6 flex-1 space-y-6 px-3 py-2 text-sm">
    {#each navGroups as group (group.label)}
      <div>
        <p class="px-2 text-[0.7rem] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]/70">
          {group.label}
        </p>
        <div class="mt-3 space-y-1.5">
          {#each group.items as item (item.href)}
            {@const Icon = item.icon}
            <button
              class={`group flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left font-medium transition-all duration-200 ${
                isActive(item.href, $page.url.pathname)
                  ? 'bg-primary-500/10 text-primary-700 shadow-inner shadow-primary-900/5 ring-1 ring-primary-500/30 dark:text-primary-200'
                  : 'text-[var(--color-text-secondary)] hover:bg-white/60 hover:text-[var(--color-text-primary)] dark:hover:bg-white/5'
              }`}
              on:click={() => navigate(item.href)}
              in:fly={{ x: -12, duration: 250 }}
            >
              <span
                class={`flex h-9 w-9 items-center justify-center rounded-xl border text-[0.8rem] transition ${
                  isActive(item.href, $page.url.pathname)
                    ? 'border-primary-500/60 bg-white text-primary-600 dark:bg-primary-900/30 dark:text-primary-200'
                    : 'border-[var(--color-border)]/70 bg-[var(--color-bg-base)]/60 text-[var(--color-text-secondary)] group-hover:border-primary-200/70 group-hover:text-primary-600 dark:bg-white/5'
                }`}
              >
                <Icon size={18} stroke-width={1.5} />
              </span>
              <span>{item.title}</span>
            </button>
          {/each}
        </div>
      </div>
    {/each}
  </nav>

  <div class="mt-auto space-y-4 px-5 pb-6">
    <button
      class="flex w-full items-center justify-between rounded-2xl border border-dashed border-primary-300/70 px-4 py-3 text-sm font-semibold text-primary-600 transition hover:-translate-y-0.5 hover:bg-primary-50/70 dark:border-primary-700/60 dark:text-primary-200"
      on:click={() => navigate('/books/new')}
    >
      <span>Quick add book</span>
      <PlusCircle size={18} />
    </button>

    <div class="flex items-center gap-3 rounded-2xl border border-[var(--color-border)]/80 bg-white/60 px-4 py-3 dark:bg-white/5">
      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&h=120&auto=format&fit=crop"
          class="h-12 w-12 rounded-2xl object-cover"
          alt="Admin avatar"
        />
        <span class="absolute -bottom-1 -right-1 block h-4 w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-[var(--color-bg-base)]"></span>
      </div>
      <div>
        <p class="text-sm font-semibold text-[var(--color-text-primary)]">Dani Rivers</p>
        <p class="text-xs text-[var(--color-text-secondary)]">Founder</p>
      </div>
    </div>
  </div>
</aside>
