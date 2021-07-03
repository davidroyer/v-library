<template>
  <button
    class="btn-blue"
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

  .btn-blue {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
</style>