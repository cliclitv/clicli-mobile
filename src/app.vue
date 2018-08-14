<template>
  <div id="app">
    <tab></tab>
    <loading></loading>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <b-nav></b-nav>
  </div>
</template>

<script>
  import Tab from 'component/tab/tab'
  import Loading from 'base/loading/loading'
  import BNav from 'component/b-nav/b-nav'

  export default {
    components: {
      Tab,
      Loading,
      BNav
    }
  }
</script>

<style scoped>

</style>