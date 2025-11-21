<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  export let open = false;
  export let onClose: () => void = () => {};
</script>

{#if open}
  <div class="fixed inset-0 z-40 flex items-center justify-center px-4 py-10" role="dialog" aria-modal="true">
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 backdrop-blur" on:click={onClose} transition:fade></div>
    <div
      class="relative z-50 w-full max-w-3xl rounded-[2.5rem] border border-white/30 bg-gradient-to-br from-white/95 to-white/80 p-8 text-[var(--color-text-primary)] shadow-2xl shadow-primary-900/20 backdrop-blur-xl dark:from-[var(--color-bg-base)] dark:to-[var(--color-bg-surface)]"
      transition:fly={{ y: 16, duration: 250 }}
    >
      <slot />
    </div>
  </div>
{/if}