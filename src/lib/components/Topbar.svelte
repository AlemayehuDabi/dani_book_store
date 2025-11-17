<script lang="ts">
import { onMount } from 'svelte';
let q = '';
</script>


<header class="h-16 flex items-center justify-between px-4 border-b border-gray-200 bg-white">
<div class="flex items-center gap-3">
<div class="hidden sm:block w-64">
<label class="relative block">
<input bind:value={q} placeholder="Search books, users, orders..." class="w-full pl-10 pr-3 py-2 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
<svg class="w-4 h-4 absolute left-3 top-2.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"/></svg>
</label>
</div>
</div>


<div class="flex items-center gap-4">
<button class="p-2 rounded-md hover:bg-gray-100">🔔</button>
<button class="p-2 rounded-md hover:bg-gray-100">⚙️</button>
<div class="flex items-center gap-2">
<img src="/avatar-placeholder.png" alt="avatar" class="w-9 h-9 rounded-full" />
<div class="hidden sm:block text-sm">Admin</div>
</div>
</div>
</header>