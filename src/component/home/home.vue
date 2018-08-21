<template>
    <div class="home">
        <article-list :article="article" :sw="sw" @getMore="getMore" @refresh="refresh"></article-list>
        <router-view></router-view>
        <loading v-show="isShow"></loading>
    </div>
</template>

<script>
  import {getPostsByStatus} from "api/article"
  import ArticleList from 'component/article-list/article-list'
  import Loading from 'base/loading/loading'

  export default {
    data() {
      return {
        article: [],
        page: 1,
        pageSize: 10,
        isShow: true,
        sw: true
      }
    },
    created() {

      this.getArticle()

    },
    methods: {
      getArticle(flag) {
        getPostsByStatus(this.page, this.pageSize).then(res => {
          if (res.data.code === 201) {
            this.isShow = false
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
      ArticleList,
      Loading
    }
  }
</script>

<style scoped lang="stylus">
    .home
        position: relative


</style>