<template>
  <transition name="fade">
    <div class="player">
      <div class="back" @click="back">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="ep" ref="eplayer">
      </div>
      <div class="info">
        <h1 class="title">
          {{post.title}}
        </h1>
        <p>{{post.time}} · {{post.uname}}投递</p>
      </div>
      <video-list :videos="videos" @select="select"></video-list>
    </div>
  </transition>
</template>

<script>
  import {getRealUrl} from 'api/video'
  import Eplayer from 'eplayer'
  import VideoList from 'component/video-list/video-list'

  export default {
    name: "player",
    props: ['url', 'post', 'videos'],
    methods: {
      select(item) {
        this.$emit('changeUrl', item)
      },

      back() {
        this.$emit('back')
      }
    },
    watch: {
      url(){
        getRealUrl(this.url).then(res => {
          console.log(res.data.url)
          new Eplayer(this.$refs.eplayer, {
            src: res.data.url,
            themeColor: '#fe2c55'
          })
        })
      }
    },
    components: {
      VideoList
    }
  }
</script>

<style scoped lang="stylus">
  @import "~common/styl/variable"
  .player
    position fixed
    top: 0
    bottom: 0
    left: 0
    right 0
    background $b-color
    z-index 99999
    .back
      height: 20px
      width: 20px
      z-index: 100
      display: block
      position absolute
      top: 10px
      left 10px
      color: #fff
      font-size 20px
    .ep
      height 225px
      width 100%
      position relative
    .info
      padding: 10px
      .title
        font-size: 18px
        font-weight lighter
        display block
        padding-bottom: 5px

  .fade-enter-active, .fade-leave-active
    transition: all 0.3s

  .fade-enter, .fade-leave-to
    transform: translate3d(100%, 0, 0)


</style>