<script lang="ts">
  import type { Book } from "$lib/data/books";

export let books:Book[] = [];
export let onEdit = (b) => {};
export let onDelete = (b) => {};
</script>


<table class="min-w-full bg-white border border-gray-100 rounded-lg overflow-hidden">
<thead class="bg-gray-50 text-left">
<tr>
<th class="px-4 py-3 text-sm text-gray-600">Book</th>
<th class="px-4 py-3 text-sm text-gray-600">Author</th>
<th class="px-4 py-3 text-sm text-gray-600">Price</th>
<th class="px-4 py-3 text-sm text-gray-600">Stock</th>
<th class="px-4 py-3 text-sm text-gray-600">Rating</th>
<th class="px-4 py-3 text-sm text-gray-600">Actions</th>
</tr>
</thead>
<tbody>
{#each books as book}
<tr class="border-t">
<td class="px-4 py-3 flex items-center gap-3">
<img src={book.coverImage || '/cover-placeholder.png'} class="w-12 h-16 object-cover rounded-md" alt="cover" />
<div>
<div class="font-medium">{book.title}</div>
<div class="text-xs text-gray-500">{book.publishedYear}</div>
</div>
</td>
<td class="px-4 py-3 text-sm">{book.author}</td>
<td class="px-4 py-3 text-sm">${book.price}</td>
<td class="px-4 py-3 text-sm">{book.description}</td>
<td class="px-4 py-3 text-sm">{book.rating || '—'}</td>
<td class="px-4 py-3 text-sm">
<div class="flex gap-2">
<button class="px-3 py-1 rounded-md border border-gray-200 hover:bg-gray-50" on:click={() => onEdit(book)}>Edit</button>
<button class="px-3 py-1 rounded-md border border-red-100 text-red-600 hover:bg-red-50" on:click={() => onDelete(book)}>Delete</button>
</div>
</td>
</tr>
{/each}
</tbody>
</table>