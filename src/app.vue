<template>
  <div id="app">
    <tab></tab>
    <loading></loading>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  import Tab from 'component/tab/tab'
  import Loading from 'base/loading/loading'

  export default {
    // mounted() {
    //   this.changeHash()
    // },
    // methods: {
    //   changeHash() {
    //     const app = document.getElementById('app')
    //     const MutationObserver = window.MutationObserver || window.WebKitMutationObserver
    //     const options = {
    //       childList: true,
    //       subtree: true
    //     }
    //     const mo = new MutationObserver(function () {
    //       console.log('111')
    //     })
    //     mo.observe(app, options)
    //   }
    // },
    components: {
      Tab,
      Loading
    }
  }
</script>

<style scoped>

</style>