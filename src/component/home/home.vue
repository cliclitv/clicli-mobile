<template>
    <div class="home">
        <article-list :article="article" :sw="sw" @getMore="getMore" @refresh="refresh"></article-list>
    </div>
</template>

<script>
  import {getPostsByStatus} from "api/article"
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

      this.getArticle()

    },
    methods: {
      getArticle(flag) {
        getPostsByStatus(this.page, this.pageSize).then(res => {
          this.isShow = true
          if (res.data.code === 201) {
            if (flag) {
              this.sw = true
              this.article = this.article.concat(res.data.posts)
              if (!res.data.posts) {
                this.isShow = false
              }
            } else {
              this.article = res.data.posts
            }

          }
        })
      },
      getMore() {
        this.page++
        this.sw = false
        this.getArticle(true)
      },
      refresh() {
        this.page = 1
        this.getArticle(false)
      }
    },

    components: {
      ArticleList
    }
  }
</script>

<style scoped lang="stylus">
    .home
        position: relative


</style>