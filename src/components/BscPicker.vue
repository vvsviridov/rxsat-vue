<template>
  <div class="input-field col m6">
    <select @change="btnClick" v-model="selBsc">
      <option value="" disabled selected>Choose BSC</option>
      <option v-for="bsc in Object.keys(allBscs)" :key="bsc" :value="bsc">{{ bsc }}</option>
    </select>
    <label>BSC Picker</label>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  import M from 'materialize-css'

  export default {
    name: 'BscPicker',
    computed: mapGetters(['allBscs']),
    data() {
      return {
        selBsc: ''
      }
    },
    methods: {
      ...mapActions(['setSelectedBsc']),
      btnClick() {
        this.setSelectedBsc(this.selBsc)
      }
    },
    mounted() {
        M.AutoInit()
    }
  }
</script>