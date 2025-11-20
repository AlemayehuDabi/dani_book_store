<script lang="ts">
  // If you prefer separate page for create instead of modal
  import BookForm from '$lib/components/BookForm.svelte';
  function handleSave(e: any) {
    // TODO: POST to api
    console.log('save', e.detail);
  }
</script>

<div class="max-w-3xl">
  <!-- <h2 class="text-2xl font-semibold mb-4">Add Book</h2> -->
  <BookForm on:save={handleSave} />
</div>
