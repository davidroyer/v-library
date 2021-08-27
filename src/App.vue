<template>
  <AcademicCapIcon class="block w-20 h-20 mx-auto mb-6 text-blue-500" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <VButton @clicked="handleClick" label="My Button" />


  <VBlock />
</template>

<script>
    console.log('FROM APP');

import { AcademicCapIcon } from '@heroicons/vue/solid'

export default {
  components: { AcademicCapIcon },
  methods: {
    handleClick () {
      console.log('CLICKED')
      alert('test')
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }
</style>
