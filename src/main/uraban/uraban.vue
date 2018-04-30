<template>
  <div class="home">
    <router-view>
    </router-view>
  </div>

</template>

<script>
  import ArticleList from 'component/article-list/article-list'
  import BNav from 'component/b-nav/b-nav'


  export default {
    components: {
      ArticleList,
      BNav
    }
  }
</script>

<style scoped>

</style>