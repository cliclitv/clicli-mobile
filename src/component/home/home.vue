<template>
  <div class="home">
    <article-list :article="article"></article-list>
  </div>
</template>

<script>
  import {articleList} from "api/idanmu/article"
  import ArticleList from 'component/article-list/article-list'

  export default {
    data() {
      return {
        article: []
      }
    },
    created() {

      this.getIdanmuArticle()

    },
    methods: {
      getIdanmuArticle() {
        articleList(1, 10).then(res => {
          if (res.data.code === 0) {
            this.article = res.data.result
          }
        })
      },

    },
    components: {
      ArticleList
    }
  }
</script>

<style scoped>
  .home{
    position: relative;
  }

</style>