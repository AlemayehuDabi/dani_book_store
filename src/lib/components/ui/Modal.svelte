<script lang="ts">
export let open = false;
export let onClose: () => void = () => {};
</script>
{#if open}
<div class="fixed inset-0 z-40 flex items-center justify-center">
<div class="fixed inset-0 bg-black/40" on:click={onClose}></div>
<div class="bg-white rounded-lg shadow-xl z-50 w-full max-w-3xl p-6">
<slot />
</div>
</div>
{/if}