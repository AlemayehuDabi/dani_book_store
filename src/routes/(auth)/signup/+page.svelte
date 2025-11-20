<script lang="ts">
  import { fade } from 'svelte/transition';
  import BookShelf from '$lib/assets/bookshelf.jpg';
  import { enhance } from '$app/forms';

  let showPassword = false;

  export let form: import('./$types').ActionData | undefined;

  $: if (form?.state === 'success' && 'data' in form) {
    console.log('form success', form.data);
  }

  $: if (form?.state === 'error') {
    console.log('form error', form.message);
  }
</script>

<svelte:head>
  <title>Sign-up - BookStore</title>
</svelte:head>

<section>
  <div class="min-h-screen flex flex-col md:flex-row bg-[#fdf6ec]">
    <!-- Left side: Sign In form -->
    <div
      class="w-full md:w-1/2 flex items-center justify-center p-8 bg-white/90 backdrop-blur-sm"
      transition:fade={{ duration: 500 }}
    >
      <div class="w-full max-w-md">
        <div class="text-center mb-6">
          <!-- <img src="/book-logo.svg" alt="Bookstore Logo" class="mx-auto w-14 h-14 mb-2" /> -->
          <h1 class="text-3xl font-serif text-primary-800">Welcome To DBS</h1>
          <p class="text-primary-900 mt-1">Sign up to explore your next read.</p>
        </div>

        <form method="POST" use:enhance class="space-y-5">
          <div>
            <label
              for="signup-name"
              class="block text-primary-800 mb-1 font-medium">Name</label
            >
            <input
              type="text"
              name="name"
              id="signup-name"
              required
              class="w-full px-4 py-3 border border-primary-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-400 bg-white placeholder:text-primary-300"
              placeholder="Jon"
            />
          </div>
          <div>
            <label
              for="signup-email"
              class="block text-primary-800 mb-1 font-medium">Email</label
            >
            <input
              type="email"
              name="email"
              id="signup-email"
              required
              class="w-full px-4 py-3 border border-primary-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-400 bg-white placeholder:text-primary-300"
              placeholder="jon@example.com"
            />
          </div>

          <div>
            <label
              for="signup-password"
              class="block text-primary-800 mb-1 font-medium">Password</label
            >
            <div class="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="signup-password"
                required
                class="w-full px-4 py-3 border border-primary-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-400 bg-white placeholder:text-primary-300"
                placeholder="••••••••"
              />
              <button
                type="button"
                class="absolute right-3 top-3 text-[#856b53] hover:text-primary-800"
                on:click={() => (showPassword = !showPassword)}
              >
                {#if showPassword}
                  <span>🙈</span>
                {:else}
                  <span>👁️</span>
                {/if}
              </button>
            </div>
          </div>

          <div class="flex justify-between items-center text-sm">
            <label class="flex items-center gap-2 text-[#6b4226]">
              <input type="checkbox" class="accent-[#c49b63]" />
              Remember me
            </label>
          </div>

          {#if form?.state == 'error'}
            <p class="text-red-600">{form.message}</p>
          {/if}
          {#if form?.state == 'success'}
            <p class="text-green-700">Login success!</p>
          {/if}

          <button
            type="submit"
            class="w-full bg-primary-500 text-white py-3 rounded-xl font-semibold hover:bg-primary-600 transition"
          >
          
            Sign Up
          </button>
        </form> 

        <p class="text-center text-sm text-[#856b53] mt-6">
          Already have account.
          <a href="/signin" class="text-primary-700 font-medium hover:underline"
            >Sign in</a
          >
        </p>
      </div>
    </div>

    <!-- Right side: image / quote -->
    <div
      class="hidden md:flex w-1/2 bg-primary-500 text-[#fdf6ec] flex-col items-center justify-center p-12 relative overflow-hidden"
      transition:fade={{ duration: 600 }}
    >
      <img
        src={BookShelf}
        alt="Bookshelf"
        class="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div class="relative z-10 text-center">
        <h2 class="text-4xl font-serif mb-4">
          “A room without books is like a body without a soul.”
        </h2>
        <p class="text-[#f4e9d7] text-sm tracking-wide font-medium">
          – Marcus Tullius Cicero
        </p>
      </div>
    </div>
  </div>
</section>
