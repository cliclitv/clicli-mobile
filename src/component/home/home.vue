<template>
  <div class="home">
    <article-list :article="article" :sw="sw" @getMore="getMore" @refresh="refresh"></article-list>
  </div>
</template>

<script>
  import {articleList} from "api/idanmu/article"
  import ArticleList from 'component/article-list/article-list'

  export default {
    data() {
      return {
        article: [],
        page: 1,
        pageSize: 10,
        isShow: false,
        sw: true
      }
    },
    created() {

      this.getIdanmuArticle()

    },
    methods: {
      getIdanmuArticle(flag) {
        articleList(this.page, this.pageSize).then(res => {
          this.isShow = true
          if (res.data.code === 0) {
            if (flag) {
              this.sw = true
              this.article = this.article.concat(res.data.result)
              if (res.data.count === 0) {
                this.isShow = false
              }
            } else {
              this.article = res.data.result
            }

          }
        })
      },
      getMore() {
        this.page++
        this.sw = false
        this.getIdanmuArticle(true)
      },
      refresh() {
        this.page = 1
        this.getIdanmuArticle(false)
      }
    },

    components: {
      ArticleList
    }
  }
</script>

<style scoped>
  .home {
    position: relative;
  }

</style>