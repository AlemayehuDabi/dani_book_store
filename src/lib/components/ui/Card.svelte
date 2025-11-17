<script lang="ts">
export let title = '';
export let subtitle = '';
</script>
<div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
<div class="text-sm font-medium text-gray-500">{title}</div>
<div class="mt-2 text-2xl font-semibold">{subtitle}</div>
<slot />
</div>