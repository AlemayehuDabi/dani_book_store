import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  envDir: '.', // Ensure Vite looks for .env in the project root
  server: {
    hmr: {
      overlay: true, // Keep error overlays enabled for debugging
    },
  },
});
