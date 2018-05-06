<template>
  <div class="home">
    <uraban-list :article="article" @getMore="getMore"></uraban-list>
  </div>
</template>

<script>
  import {getAll} from 'api/uraban/article'
  import UrabanList from 'component/uraban-list/uraban-list'

  export default {
    data() {
      return {
        article: [],
        page: 1,
        pageSize: 4,
        isShow: false
      }
    },
    created() {
      this.getUrabanArticle()
    },
    methods: {
      getUrabanArticle(flag) {
        getAll(this.page, this.pageSize).then(res => {
          if (res.data.status === 200) {
            if (flag) {
              this.article = this.article.concat(res.data.data)
              if (res.data.count === 0) {
                this.isShow = false
              }
            } else {
              this.article = res.data.data
            }
          }
        })
      },
      getMore() {
        this.page++
        this.getUrabanArticle(true)
      }
    },
    components: {
      UrabanList
    }
  }
</script>

<style scoped>

</style>