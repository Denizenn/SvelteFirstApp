import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 3000,
  },
  // optimizeDeps: {
  //   exclude: [
  //     'cmdk-sv', 
  //     'lucide-svelte/icons/search', 
  //     '@fortawesome/svelte-fontawesome', 
  //     'bits-ui', 
  //     'lucide-svelte/icons/x',
  //     'devalue',
  //     'tippy.js',
  //   ]
  // }
});
