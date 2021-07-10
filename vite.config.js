import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
// import Icons from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'
import { ViteAliases } from 'vite-aliases'
import svgLoader from 'vite-svg-loader'
import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
// import resolve from '@rollup/plugin-node-resolve'

import commonjs from '@rollup/plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
    }),
    commonjs(),
    // Icons(),
    ViteAliases(),
    // svgLoader(),

    ViteComponents()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/library.js'),
      name: 'VLibrary'
    },

    rollupOptions: {
      external: ['vue']

      // plugins: [

      //   postVue: [
      //     resolve({
      //       extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      //     }),
      //     // Process only `<style module>` blocks.
      //     PostCSS({
      //       modules: {
      //         generateScopedName: '[local]___[hash:base64:5]',
      //       },
      //       include: /&module=.*\.css$/,
      //     }),
      //     // Process all `<style>` blocks except `<style module>`.
      //     PostCSS({ include: /(?<!&module=.*)\.css$/ }),
      //     commonjs(),
      //   ],
      // ]
    }
  }
  // optimizeDeps: {
  //   exclude: ['@heroicons/vue']
  // }
})
