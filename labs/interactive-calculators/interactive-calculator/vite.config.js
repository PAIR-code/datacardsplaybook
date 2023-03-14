import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dns from 'dns'; 

export default defineConfig({
  plugins: [
    svelte({
      /* plugin options */
      configFile: './svelte.config.js',
    })
  ]
  /*
  @deprecated due to routing port conflicts
  server: {
    open: 'lib/routes/__layout.svelte',
    hmr: {
      host: 'localhost',
      port: 9222
    }
  } 
  */
});