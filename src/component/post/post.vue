<template>
    <transition name="fade">
        <div class="article-detail" v-if="post">
            <div class="top">
                <div class="back" @click="back">
                    <i class="iconfont icon-back"></i>
                </div>
                <h2 v-if="post.title" v-text="post.title.substr(0,22)+' …'"></h2>
            </div>
            <div class="wrap" ref="wrap">
                <div>
                    <div class="bio">
                        <div class="avatar">
                            <img :src="getAvatar(post.uqq)">
                            <p>{{post.uname}}</p>
                        </div>
                    </div>
                    <div class="content" v-if="post.content" v-lazy-container="{ selector: 'img' }">
                        <p v-html="getText(post.content)"></p>
                    </div>
                </div>
            </div>
            <loading v-show="isShow"></loading>
        </div>
    </transition>

</template>

<script>
  import {getOneArticle} from "api/article"
  import marked from 'marked'
  import JRoll from 'jroll'
  import Loading from 'base/loading/loading'

  export default {
    data() {
      return {
        post: {},
        isShow: true
      }
    },
    created() {
      this.getOne()
    },
    watch: {
      post: function (val) {
        if (val.content) {
          setTimeout(() => {
            let jroll = new JRoll(this.$refs.wrap, {})
            let imgs = [].slice.call(document.querySelectorAll(".content img"))
            if (imgs) {
              imgs.forEach((i) => {
                i.onload = function () {
                  jroll.refresh()
                }
              })
            }
          }, 20)
        }
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      getOne() {
        getOneArticle(this.$route.params.id).then(res => {
          if (res.data.code === 201) {
            this.isShow = false
            this.post = res.data.result
          }
        })
      },
      getAvatar(qq) {
        return `http://q2.qlogo.cn/headimg_dl?dst_uin=` + qq + `&spec=100`
      },
      getText(content) {
        const mark = marked(content, {breaks: true})
        return mark.replace(/src/g, 'data-src')
      },
    },
    components: {
      Loading
    }
  }
</script>

<style lang="stylus">
    @import "~common/styl/variable"
    .article-detail
        position: fixed
        background: $b-color
        top: 0
        bottom: 0
        left: 0
        right: 0
        z-index: 10
        font-size: 14px

    .wrap
        position: fixed
        top: 41px
        bottom: 10px
        right: 0
        left: 0

    .article-detail .top
        background $bg-color
        border-bottom 0.7px solid $border-color
        padding: 12px
        color: #fff
        display: flex
        position: fixed
        width: 100%
        z-index: 999
        box-sizing: border-box;

    .top h2
        font-size: 14px
        text-align: center
        padding-left: 10px

    .article-detail .avatar
        padding: 15px
        justify-content: center
        display: flex
        align-items: center

    .avatar img
        border-radius: 15px
        height: 30px
        width: 30px
        margin-right: 10px

    .content
        padding: 10px

    .content
        p
            a
                color: #fff
                font-weight bold
            img
                width: 100%

    blockquote
        background: $bg-color
        border: .7px solid $border-color
        padding: 10px
        margin: 10px 0
        font-size: 13px

    .fade-enter-active, .fade-leave-active
        transition: all 0.3s

    .fade-enter, .fade-leave-to
        transform: translate3d(100%, 0, 0)


</style>