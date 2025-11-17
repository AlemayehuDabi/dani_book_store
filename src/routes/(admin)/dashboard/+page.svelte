<script lang="ts">
import Card from '$lib/components/ui/Card.svelte';
</script>


<div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
<Card title="Total Books" subtitle="1,248" />
<Card title="Total Sales" subtitle="7,420" />
<Card title="Monthly Revenue" subtitle="$18,705" />
<Card title="Active Users" subtitle="3,452" />
</div>


<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div class="bg-white rounded-2xl p-6 border border-gray-100 min-h-[260px]">
<h3 class="text-lg font-semibold mb-4">Revenue (6 months)</h3>
<div class="h-48 flex items-center justify-center text-gray-400">[Chart placeholder]</div>
</div>


<div class="bg-white rounded-2xl p-6 border border-gray-100 min-h-[260px]">
<h3 class="text-lg font-semibold mb-4">Top Categories</h3>
<div class="h-48 flex items-center justify-center text-gray-400">[Chart placeholder]</div>
</div>
</div>


<div class="mt-8">
<h3 class="text-lg font-semibold mb-4">Latest Orders</h3>
<div class="bg-white rounded-2xl p-4 border border-gray-100">
<table class="min-w-full">
<thead>
<tr class="text-left text-sm text-gray-600">
<th class="px-3 py-2">Order</th>
<th class="px-3 py-2">User</th>
<th class="px-3 py-2">Amount</th>
<th class="px-3 py-2">Status</th>
</tr>
</thead>
<tbody>
<tr class="border-t">
<td class="px-3 py-2">#1003</td>
<td class="px-3 py-2">Marta</td>
<td class="px-3 py-2">$24.00</td>
<td class="px-3 py-2"><span class="text-sm px-2 py-1 rounded-full bg-green-50 text-green-700">Paid</span></td>
</tr>
</tbody>
</table>
</div>
</div>