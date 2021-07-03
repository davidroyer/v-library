import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Icons from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components';
import { ViteAliases } from 'vite-aliases';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Icons(),
    ViteAliases(),
    ViteComponents()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/library.js'),
      name: 'VLibrary'
    },

    rollupOptions: {
      external: ['Vue'],
      output: {
        globals: {
          Vue: 'Vue'
        }
      }
    }
  }
});
