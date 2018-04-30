<template>
  <div class="home">
    <uraban-list :article="article"></uraban-list>
  </div>
</template>

<script>
  import {getAll} from 'api/uraban/article'
  import UrabanList from 'component/uraban-list/uraban-list'

  export default {
    data() {
      return {
        article: []
      }
    },
    created() {

      this.getUrabanArticle()

    },
    methods: {
      getUrabanArticle() {
        getAll().then(res => {
          if (res.data.status === 200) {
            this.article = res.data.data
          }
        })
      },

    },
    components: {
      UrabanList
    }
  }
</script>

<style scoped>

</style>