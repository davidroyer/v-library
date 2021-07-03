<template>
  <div class="v-block">
    <AcademicCapIcon class="block w-20 h-20 mx-auto mb-6 text-blue-500" />

    <div>Basic Div new</div>
  </div>
</template>

<script>
import { AcademicCapIcon } from '@heroicons/vue/solid'

export default {
  components: { AcademicCapIcon },
}
</script>

<style lang="postcss">
  .v-block {
    @apply p-5 my-5 text-xl font-semibold bg-yellow-200;
  }
</style>