<script lang="ts">
  import { goto } from '$app/navigation';
  const items = [
    { title: 'Dashboard', href: '/dashboard', icon: 'home' },
    { title: 'Books', href: '/books', icon: 'book' },
    { title: 'Orders', href: '/orders', icon: 'shopping-cart' },
    { title: 'Users', href: '/users', icon: 'users' },
    { title: 'Categories', href: '/categories', icon: 'tag' },
    { title: 'Analytics', href: '/analytics', icon: 'bar-chart' },
    { title: 'Settings', href: '/settings', icon: 'settings' },
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
      on:click={() => navigate('/admin/dashboard')}
    >
      <div
        class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center text-white font-bold"
      >
        DB
      </div>
      <div class="hidden lg:block text-lg font-semibold">Dani Admin</div>
    </div>
  </div>

  <nav class="mt-6 px-2">
    {#each items as item}
      <a
        class="group flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer"
        on:click={() => navigate(item.href)}
      >
        <svg
          class="w-5 h-5 text-gray-500 group-hover:text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7h18M3 12h18M3 17h18"
          ></path></svg
        >
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
