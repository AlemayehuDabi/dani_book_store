<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let editBook = null;
  const dispatch = createEventDispatcher();
  let form = {
    title: '',
    author: '',
    price: 0,
    stock: 0,
    description: '',
    coverUrl: '',
    slug: '',
  };

  $: if (editBook) form = { ...editBook };

  function save() {
    // TODO: validate
    dispatch('save', form);
  }
</script>

<div>
  <h3 class="text-lg font-semibold mb-4">
    {editBook ? 'Edit Book' : 'Add Book'}
  </h3>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <input
      placeholder="Title"
      bind:value={form.title}
      class="p-2 border rounded-md"
    />
    <input
      placeholder="Author"
      bind:value={form.author}
      class="p-2 border rounded-md"
    />
    <input
      placeholder="Price"
      type="number"
      bind:value={form.price}
      class="p-2 border rounded-md"
    />
    <input
      placeholder="Stock"
      type="number"
      bind:value={form.stock}
      class="p-2 border rounded-md"
    />
    <input
      placeholder="Slug"
      bind:value={form.slug}
      class="p-2 border rounded-md"
    />
    <input
      placeholder="Cover URL"
      bind:value={form.coverUrl}
      class="p-2 border rounded-md"
    />
    <textarea
      placeholder="Description"
      bind:value={form.description}
      class="p-2 border rounded-md lg:col-span-2"
      rows="6"
    ></textarea>
  </div>
  <div class="mt-4 flex justify-end gap-2">
    <button
      class="px-4 py-2 rounded-md border"
      on:click={() => dispatch('cancel')}>Cancel</button
    >
    <button
      class="px-4 py-2 rounded-md bg-indigo-600 text-white"
      on:click={save}>Save</button
    >
  </div>
</div>
