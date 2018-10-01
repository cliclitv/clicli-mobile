<template>
  <transition name="fade">
    <div class="article-detail" v-if="post">
      <div class="top">
        <div class="back" @click="back">
          <i class="iconfont icon-back"></i>
        </div>
        <h2 v-if="post.title" v-text="post.title.substr(0,20)+' …'"></h2>
      </div>
      <div class="wrap" ref="wrap">
        <div>
          <div class="bio">
            <div class="avatar">
              <img :src="getAvatar(post.uqq)" v-show="post.uqq">
              <p>{{post.uname}}</p>
            </div>
          </div>
          <div class="content" v-if="post.content" v-lazy-container="{ selector: 'img' }">
            <p v-html="getText(post.content)"></p>
          </div>
          <video-list :videos="videos" @select="select"></video-list>
        </div>
      </div>
      <loading v-show="isShow"></loading>
      <player v-show="playShow"></player>
    </div>
  </transition>

</template>

<script>
  import {getOneArticle} from "api/article"
  import {getVideos} from 'api/video'
  import marked from 'marked'
  import Bscroll from 'better-scroll'
  import Loading from 'base/loading/loading'
  import VideoList from 'component/video-list/video-list'
  import Player from 'base/player/player'

  export default {
    data() {
      return {
        post: {},
        isShow: true,
        videos: [],
        playShow: false,
        url: ''
      }
    },
    mounted() {
      this.getOne()
      this.getVideoList()
    },
    watch: {
      post: function (val) {
        if (val.content) {
          setTimeout(() => {
            let scroll = new Bscroll(this.$refs.wrap, {
              click: true
            })
            let imgs = [].slice.call(document.querySelectorAll(".content img"))
            if (imgs) {
              imgs.forEach((i) => {
                i.onload = function () {
                  scroll.refresh()
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
      select(item) {
        this.playShow = true
        this.url = item.content
      },
      getOne() {
        getOneArticle(this.$route.params.id).then(res => {
          if (res.data.code === 201) {
            this.isShow = false
            this.post = res.data.result
          }
        })
      },
      getVideoList() {
        getVideos(this.$route.params.id, 1, 100).then(res => {
          this.videos = res.data.videos
        })
      },
      getAvatar(qq) {
        return `https://q2.qlogo.cn/headimg_dl?dst_uin=` + qq + `&spec=100`
      },
      getText(content) {
        let str = content.replace('http://', 'https://')
        let mark = marked(str, {breaks: true})
        return mark.replace(/src/g, 'data-src')

      },
    },
    components: {
      Loading,
      VideoList,
      Player
    }
  }
</script>

<style lang="stylus">
  @import "~common/styl/variable"
  .article-detail
    position: fixed
    background: $bg-color
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index: 100
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
    box-sizing: border-box

  .top
    .back
      height: 20px
      width: 20px
      z-index: 100
      display: block
    h2
      font-size: 14px
      text-align: center
      padding-left: 10px

  .article-detail .avatar
    padding: 15px
    justify-content: center
    display: flex
    align-items: center
    background $b-color

  .avatar img
    border-radius: 15px
    height: 30px
    width: 30px
    margin-right: 10px

  .content
    padding: 10px
    background $b-color

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