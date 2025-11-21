<script lang="ts">
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Topbar from '$lib/components/Topbar.svelte';
</script>

<div class="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(184,117,128,0.12),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(214,138,149,0.18),_transparent_50%)]">
  <!-- <div class="pointer-events-none absolute inset-0 opacity-50 mix-blend-multiply dark:mix-blend-screen">
    <div class="absolute left-1/2 top-[-10rem] h-96 w-96 -translate-x-1/2 rounded-full bg-primary-200 blur-3xl dark:bg-primary-600/30"></div>
    <div class="absolute bottom-[-12rem] right-[-4rem] h-[30rem] w-[28rem] rounded-full bg-primary-400/30 blur-[160px] dark:bg-primary-700/30"></div>
  </div> -->

  <div class="relative flex min-h-screen text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)]">
    <Sidebar />
    <div class="flex-1 min-h-screen bg-[var(--color-bg-base)]/85 backdrop-blur-xl dark:bg-[var(--color-bg-base)]/80">
      <Topbar />
      <main class="px-4 py-6 lg:px-10 lg:py-10">
        <slot />
      </main>
    </div>
  </div>
</div>
