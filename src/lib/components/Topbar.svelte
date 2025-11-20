<script lang="ts">
    import { Search } from '@lucide/svelte';
import { onMount } from 'svelte';
let q = '';
</script>


<header class="h-16 flex items-center justify-between px-4 border-b border-gray-200 bg-white">
<div class="flex items-center gap-3">
<div class="relative hidden sm:block w-64">
<label class="relative block">
<Search size={16} class="absolute top-3 left-3 text-gray-400" />
<input bind:value={q} placeholder="Search books, users, orders..." class="w-full pl-10 pr-3 py-2 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary-500" />
</label>
</div>
</div>


<div class="flex items-center gap-4">
<button class="p-2 rounded-md hover:bg-gray-100">🔔</button>
<button class="p-2 rounded-md hover:bg-gray-100">⚙️</button>
<div class="flex items-center gap-2">
<img src="/avatar-placeholder.png" alt="avator" class="w-9 h-9 rounded-full" />
<div class="hidden sm:block text-sm">Admin</div>
</div>
</div>
</header>