<template>
  <div class="container">
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea1" v-model="csv" class="materialize-textarea"></textarea>
            <label for="textarea1">CSV</label>
          </div>
        </div>
      </form>
    </div>
    <a @click="btnClick" class="waves-effect waves-light btn"><i class="material-icons right">chevron_right</i>Send</a>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import M from 'materialize-css'
  
  export default {
    name: 'Home',
    data() {
      return {
        csv: ''
      }
    },
    methods: {
      ...mapActions(['postBscs']),
      btnClick() {
        this.postBscs(this.csv)
        this.csv = ''
      }
    },
    mounted() {
      M.AutoInit()
    }
 
  }
</script>
