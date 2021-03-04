<template>
    <div class="wf-command">
        {{ command }}
    </div>
</template>

<script>
  export default {
    name: 'WinfiolCommand',
    props: {
      command: String
    }
  }
</script>

<style scoped>
    .wf-command {
    color: darkblue;
    }
</style>