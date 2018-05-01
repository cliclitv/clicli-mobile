<template>
  <div>
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
    components: {
      Tab,
      Loading
    }
  }
</script>

<style scoped>

</style>