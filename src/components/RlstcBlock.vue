<template>
    <div>
      <div v-for="cell in cells" :key="cell">
        <Command :command="`RLSTC:CELL=${cell},STATE=${state};`" />
      </div>
    </div>
</template>

<script>
  import Command from '@/components/Command'

  export default {
    name: 'RlstcBlock',
    components: {
        Command
    },
    props: {
      cells: Array,
      state: String
    }
  }
</script>
