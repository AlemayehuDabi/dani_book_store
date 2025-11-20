<script lang="ts">
  import { goto } from '$app/navigation';
  import { LayoutDashboard, Book, ShoppingCart, Users, Tag, BarChart, Settings } from '@lucide/svelte';

  let isOpen = $state(false);
  const items = [
    { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { title: 'Books', href: '/books', icon: Book },
    { title: 'Orders', href: '/orders', icon: ShoppingCart },
    { title: 'Users', href: '/users', icon: Users },
    { title: 'Categories', href: '/categories', icon: Tag },
    { title: 'Analytics', href: '/analytics', icon: BarChart },
    { title: 'Settings', href: '/settings', icon: Settings },
  ];

  function navigate(href: string) {
    goto(href);
  }
</script>

<aside
  class="w-20 lg:w-64 bg-white border-r border-gray-200 min-h-screen sticky top-0"
>

  <div class="h-16 flex items-center justify-center lg:justify-start px-4">
    <div
      class="flex items-center gap-3 cursor-pointer"
      on:click={() => navigate('/dashboard')}
    >
      <div
        class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center text-white font-bold"
      >
        DB
      </div>
      <div class="hidden lg:block text-lg font-semibold">DBS Admin</div>
    </div>
  </div>

  <nav class="mt-6 px-2">
    {#each items as item}
    {@const Icon= item.icon}
      <a
        class="group flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer"
        on:click={() => navigate(item.href)}
      >
      <Icon size={20} class="text-gray-500 group-hover:text-indigo-600" />
        <span class="hidden lg:block">{item.title}</span>
      </a>
    {/each}
  </nav>

  <div class="mt-auto p-4 border-t border-gray-100">
    <div class="flex items-center gap-3">
      <img
        src="/avatar-placeholder.png"
        class="w-10 h-10 rounded-full"
        alt="admin"
      />
      <div class="hidden lg:block">
        <div class="text-sm font-medium">Admin</div>
        <div class="text-xs text-gray-500">dani@bookstore</div>
      </div>
    </div>
    <button
      class="mt-3 w-full text-left text-sm text-red-600 hover:text-red-700"
      >Sign out</button
    >
  </div>
</aside>
