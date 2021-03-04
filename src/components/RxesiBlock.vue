<template>
    <div>
      <div v-for="tg in tgs" :key="tg">
        <Command :command="`Rxes${isEsi ? 'i': 'e'}:mo=rxstg-${tg};`" />
      </div>
    </div>
</template>

<script>
  import Command from '@/components/Command'

  export default {
    name: 'RxesiBlock',
    components: {
        Command
    },
    props: {
      tgs: Array,
      isEsi: Boolean
    }
  }
</script>
