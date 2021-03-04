<template>
    <div class="comment">
      !#####################!<br />
      !## ## ## {{ rsite }} ## ## ##!<br />
      !#####################!<br />
    </div>
</template>

<script>
  export default {
    name: 'CommentBlock',
    props: {
      rsite: String
    }
  }
</script>

<style scoped>
  .comment {
    color: cadetblue;
  }
</style>