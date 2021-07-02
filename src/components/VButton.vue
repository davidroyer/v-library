<template>
  <button
    class="btn-indigo"
    @click="$emit('clicked')"
  >{{label}}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Button Text'
    }
  },
  emits: ['clicked']
}
</script>

<style lang="postcss">

  .btn-indigo {
    @apply py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;
  }
</style>