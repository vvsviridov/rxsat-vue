<template>
    <div>
      <div v-for="tg in tgs" :key="tg">
        <Command :command="`Rxbl${isBli ? 'i': 'e'}:mo=rxstg-${tg}${isBli ? ',force': ''};`" />
      </div>
    </div>
</template>

<script>
  import Command from '@/components/Command'

  export default {
    name: 'RxbliBlock',
    components: {
        Command
    },
    props: {
      tgs: Array,
      isBli: Boolean
    }
  }
</script>
