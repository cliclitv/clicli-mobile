<template>
    <Scroll class="article-list">

            <ul>
                <li v-for="item in article" @click="selectItem(item)" :key="item.id">
                    <div class="suo">
                        <img v-lazy="getSuo(item.content)" alt="">
                    </div>
                    <div class="content">
                        <h2>{{item.title}}</h2>
                        <div class="bio">
                            <img v-lazy="getAvatar(item.uqq)" alt="">
                            <p>{{item.uname}}</p>
                        </div>
                    </div>
                </li>
            </ul>
    </Scroll>
</template>

<script>
  import Scroll from 'base/scroll/scroll'

  export default {
    props: ['article'],

    methods: {
      getSuo(content) {
        const str = content.replace(/http:/g, 'https:')
        return str.match(/suo(.+?)\)/i)[1].slice(2)
      },
      getAvatar(qq) {
        return `https://q2.qlogo.cn/headimg_dl?dst_uin=` + qq + `&spec=100`
      },
      selectItem(item) {
        this.$router.push({
          path: `/home/${item.id}`
        })
      }
    },
    components:{
      Scroll
    }
  }
</script>

<style scoped lang="stylus">
    @import "~common/styl/variable"
    .article-list
        top: 51px
        bottom: 57px
        position fixed
        right 0
        left: 0
        z-index 1

    .article-list li
        display: flex
        align-items: center
        padding: 10px
        font-size: 14px

    .article-list li:nth-of-type(odd)
        background: $b-color

    .article-list .content
        flex: 1

    .article-list::-webkit-scrollbar
        display: none

    .content img
        height: 30px
        width: 30px
        border-radius: 50%

    .content
        padding: 10px

    .bio
        display: flex
        align-items: center
        padding-top: 10px

    .bio p
        flex: 1

    .bio img
        margin-right: 10px

    .suo
        height: 100px
        width: 120px
        margin-right: 10px
        background: #242833

    .suo img
        height: 100px
        width: 120px
        object-fit: cover


</style>