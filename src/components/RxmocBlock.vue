<template>
    <div>
      <div v-for="tg in tgs" :key="tg">
        <Command :command="`Rxmoc:mo=rxsat-${tg},MCLTDL=5,MCLTUL=5,SIGDEL=NORMAL,SAPI=0,DSCPDL=46,DSCPUL=46;`" />
        <Command :command="`Rxmoc:mo=rxsat-${tg},MCLTDL=5,MCLTUL=5,SIGDEL=NORMAL,SAPI=62,DSCPDL=46,DSCPUL=46;`" />
        <Command :command="`Rxmoc:mo=rxsat-${tg},MCLTDL=5,MCLTUL=5,SIGDEL=NORMAL,SAPI=10,DSCPDL=46,DSCPUL=46;`" />
        <Command :command="`Rxmoc:mo=rxsat-${tg},MCLTDL=5,MCLTUL=5,SIGDEL=NORMAL,SAPI=11,DSCPDL=46,DSCPUL=46;`" />
        <Command :command="`Rxmoc:mo=rxsat-${tg},MCLTDL=5,MCLTUL=5,SIGDEL=NORMAL,SAPI=12,DSCPDL=18,DSCPUL=18;`" />
      </div>
    </div>
</template>

<script>
  import Command from '@/components/Command'

  export default {
    name: 'RxmocBlock',
    components: {
        Command
    },
    props: {
      tgs: Array,
    }
  }
</script>
