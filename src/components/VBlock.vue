<template>
  <div class="v-block">
    <AcademicCapIcon class="block w-20 h-20 mx-auto mb-6 text-blue-500" />
    <hr />
    <icon-accessibility />
    <icon-account-box />
    <div>Basic Div new</div>
    <h2>Todo Data</h2>
    <pre>{{todo}}</pre>
  </div>
</template>

<script>
import { AcademicCapIcon } from '@heroicons/vue/solid'
import IconAccessibility from 'virtual:vite-icons/carbon/accessibility'
import IconAccountBox from 'virtual:vite-icons/mdi/account-box'
import axios from 'axios'

export default {
  components: { AcademicCapIcon, IconAccessibility, IconAccountBox },

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