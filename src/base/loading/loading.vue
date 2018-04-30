<template>
  <div class="loading" v-show="isShow">
    <img src="./loading.gif" alt="">
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        isShow: true
      }
    },
    created() {
      this._interCeptor()
    },
    methods: {
      _interCeptor() {
        axios.interceptors.request.use((config) => {
          this.isShow = true
          return config
        })
        axios.interceptors.response.use((config) => {
          this.isShow = false
          return config
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .loading
    color: #08c
    background: #fffffc
    width: 840px
    text-align: center
    padding: 50px 0 80px 0

</style>
