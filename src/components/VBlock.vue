<template>
  <div class="v-block">
    <AcademicCapIcon class="block w-20 h-20 mx-auto mb-6 text-blue-500" />

    <div>Basic Div new</div>
    <h2>Todo Data</h2>
    <pre>{{todo}}</pre>
  </div>
</template>

<script>
import { AcademicCapIcon } from '@heroicons/vue/solid'
import axios from 'axios'

export default {
  components: { AcademicCapIcon },

  data: () => ({
    todo: {}
  }),

  async mounted () {
    console.log('FROM MOUNTED');

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log('data', data);

    this.todo = data
  }
}
</script>

<style lang="postcss">
  .v-block {
    @apply p-5 my-5 text-xl font-semibold bg-yellow-200;
  }
</style>