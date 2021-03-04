<template>
  <div class="container">
      <BscPicker />
      <CommandList />
  </div>
</template>

<script>
// @ is an alias to /src
  import CommandList from '@/components/CommandList.vue'
  import BscPicker from '@/components/BscPicker'

  export default {
    name: 'Result',
    components: {
      CommandList,
      BscPicker
    }
  }
</script>
