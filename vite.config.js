import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';
import { ViteAliases } from 'vite-aliases';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteAliases(), ViteComponents()],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/library.js'),
      name: 'VLibrary'
    },

    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
