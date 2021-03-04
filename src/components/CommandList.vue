<template>
  <div>
    <div v-for="(value, rsite) in allBscs[filterBsc]" :key="rsite">
      <div class="blk hoverable">
        <CommentBlock :rsite="rsite" />
      </div>
      <div class="blk hoverable">
        <RlstcBlock :cells="value['Cells']" state="halted" />
      </div>
      <div class="blk hoverable">
        <RxbliBlock :tgs="value['Tgs']" :isBli="true" />
      </div>
      <div class="blk hoverable">
        <WinfiolCommand command="@X Release" />
        <WinfiolCommand command="@T 15" />
        <WinfiolCommand command="@S Connect" />
      </div>
      <div class="blk hoverable">
        <RxesiBlock :tgs="value['Tgs']" :isEsi="false" />
      </div>
      <div class="blk hoverable">
        <WinfiolCommand command="@X Release" />
        <WinfiolCommand command="@T 15" />
        <WinfiolCommand command="@S Connect" />
      </div>
      <div class="blk hoverable">
        <RxmocBlock :tgs="value['Tgs']" />
      </div>
      <div class="blk hoverable">
        <RxesiBlock :tgs="value['Tgs']" :isEsi="true" />
      </div>
      <div class="blk hoverable">
        <RxbliBlock :tgs="value['Tgs']" :isBli="false" />
      </div>
      <div class="blk hoverable">
        <WinfiolCommand command="@X Release" />
        <WinfiolCommand command="@T 15" />
        <WinfiolCommand command="@S Connect" />
      </div>
      <div class="blk hoverable">
        <RlstcBlock :cells="value['Cells']" state="active" />
      </div>
    </div>
  </div>
</template>

<script>
  import CommentBlock from '@/components/CommentBlock'
  import RlstcBlock from '@/components/RlstcBlock'
  import RxbliBlock from '@/components/RxbliBlock'
  import RxesiBlock from '@/components/RxesiBlock'
  import RxmocBlock from '@/components/RxmocBlock'
  import WinfiolCommand from '@/components/WinfiolCommand'

  import { mapGetters, mapActions } from 'vuex'
  
  export default {
    name: 'CommandList',
    methods: {
      ...mapActions(['fetchBscs'])
    },
    computed: mapGetters(['allBscs', 'filterBsc']),
    created() {
      this.fetchBscs()
    },
    components: {
      CommentBlock,
      RlstcBlock,
      RxbliBlock,
      RxesiBlock,
      RxmocBlock,
      WinfiolCommand,
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .blk {
    padding: 0.2rem;
    margin: 0.5rem;
  }
</style>
