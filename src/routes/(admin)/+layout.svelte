<script lang="ts">
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Topbar from '$lib/components/Topbar.svelte';
  // export let data;
</script>

<div class="min-h-screen bg-[#fdf6ec] text-primary-900">
  <div class="flex">
    <Sidebar />
    <div class="flex-1 min-h-screen flex flex-col bg-white/80 backdrop-blur-sm">
      <Topbar />
      <main class="p-6 lg:p-8">
        <slot />
      </main>
    </div>
  </div>
</div>
