<template>
  <div>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  import Tab from 'component/tab/tab'

  export default {
    components: {
      Tab
    }
  }
</script>

<style scoped>

</style>