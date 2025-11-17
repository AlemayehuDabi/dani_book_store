<script lang="ts">
  import BookForm from '$lib/components/BookForm.svelte';
  export let params;
  let book = null;
  // TODO: load book by params.id
</script>

<div class="max-w-3xl">
  <h2 class="text-2xl font-semibold mb-4">Edit Book</h2>
  <BookForm {book} />
</div>
