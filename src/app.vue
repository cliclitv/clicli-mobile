<template>
  <div>
    <tab></tab>
    <router-view></router-view>
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