<template>
  <button
    class="btn btn-blue"
    @click="$emit('clicked')"
  >
  <!-- <icon-account-box class="w-6 h-6 mr-2"/> -->
  {{label}}
  </button>
</template>

<script>
// import IconAccountBox from '/@vite-icons/mdi/account-box'

export default {
  props: {
    label: {
      type: String,
      default: 'Button Text'
    }
  },
  // components: { IconAccountBox },
  emits: ['clicked']
}
</script>

<style lang="postcss">
  .btn {
    @apply inline-flex justify-center items-center
  }

  .btn-blue {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
</style>