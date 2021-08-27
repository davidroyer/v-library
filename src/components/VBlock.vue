<template>
  <div class="v-block">
    <!-- <AcademicCapIcon class="block w-20 h-20 mx-auto mb-6 text-blue-500" /> -->
    <BeakerIcon class="w-5 h-5 text-blue-500" />
    <div>
      <pre>{{todoData}}</pre>
    </div>
  </div>
</template>

<script>
import { BeakerIcon } from '@heroicons/vue/solid'
import axios from 'axios'

export default {
  name: 'VBlock',
  components: { BeakerIcon },

  data: () => ({
    todoData: {}
  }),


  mounted() {
    const {data} = axios.get('https://jsonplaceholder.typicode.com/todos/1')
  }
}
</script>

<style lang="postcss">
  .v-block {
    @apply p-5 my-5 text-xl font-semibold bg-yellow-200;
  }
</style>