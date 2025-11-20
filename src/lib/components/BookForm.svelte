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
  <h3 class="text-xl font-bold mb-4">
    {editBook ? 'Edit Book' : 'Add Book'}
  </h3>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div>
    <label for="signup-name"
    class="block mb-4 text-primary-800 mb-1 font-medium">Title:</label>
    <input
      placeholder="Title"
      bind:value={form.title}
      class=" p-2 border rounded-md"
    />
  </div>
  <div>
    <label for="signup-name"
    class="block mb-4 text-primary-800 mb-1 font-medium">Author:</label>
    <input
      placeholder="Author"
      bind:value={form.author}
      class=" p-2 border rounded-md"
    />
  </div>
  <div>
    <label for="signup-name"
    class="block mb-4 text-primary-800 mb-1 font-medium">Price:</label>
    <input
      placeholder="Price"
      type="number"
      bind:value={form.price}
      class="p-2 border rounded-md"
    />
  </div>
  <div>
    <label for="signup-name"
    class="block mb-4 text-primary-800 mb-1 font-medium">Stock:</label>
    <input
    placeholder="Stock"
    type="number"
    bind:value={form.stock}
    class="p-2 border rounded-md"
    />
  </div>
  <div>
    <label for="signup-name"
    class="block mb-4 text-primary-800 mb-1 font-medium">Slug:</label>
    <input
    placeholder="Slug"
    bind:value={form.slug}
    class="p-2 border rounded-md"
    />
  </div>
  <div>
    <label for="signup-name"
    class="block mb-4 text-primary-800 mb-1 font-medium">Cover Url:</label>
    <input
    placeholder="Cover URL"
    bind:value={form.coverUrl}
    class="p-2 border rounded-md"
    />
  </div>
    <label for="signup-name"
    class="block text-primary-800 font-medium">Description:</label>
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
      class="px-4 py-2 rounded-md bg-primary-500 hover:bg-primary-600 text-white"
      on:click={save}>Save</button
    >
  </div>
</div>
