<template>
  <transition name="fade">
    <div class="uraban-post" v-if="post">
      <div class="top">
        <div class="back" @click="back">
          <i class="iconfont icon-back"></i>
        </div>
        <h2 v-if="post.title" v-text="post.title.substr(0,24)+'…'"></h2>
      </div>
      <div class="wrap" ref="wrap">
        <div>
          <div class="bio">
            <div class="avatar">
              <img :src="getAvatar(post.author[0].mail)" v-if="post.author">
              <p v-if="post.author">{{post.author[0].name}}</p>
            </div>
          </div>
          <div class="content" v-if="post.text">
            <p v-html="getText(post.text)"></p>
          </div>
        </div>
      </div>
    </div>


  </transition>

</template>

<script>
  import {getOneArticle} from "api/uraban/article"
  import md5 from 'blueimp-md5'
  import JRoll from 'jroll'
  import marked from 'marked'

  export default {
    data() {
      return {
        post: {}
      }
    },
    created() {
      this.getOne()
    },

    watch: {
      post: function (val) {
        if (val.text) {
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
          if (res.data.status === 200) {
            this.post = res.data.data
          }
        })
      },
      getAvatar(avatar) {
        return 'http://avatar.tietuku.com/avatar/' + md5(avatar)
      },
      getText(text) {
        const str = text.replace(/www.uraban.me/g, 'pic.51xiaoxin.com/www.uraban.me');
        return marked(str, {breaks: true})
      },
    }
  }
</script>

<style>
  .uraban-post {
    position: fixed;
    background: #171a21;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    font-size: 14px;
  }

  .wrap {
    position: fixed;
    top: 51px;
    bottom: 10px;
    right: 0;
    left: 0;
  }

  .uraban-post .top {
    background: #48a1ff;
    padding: 12px;
    color: #fff;
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 999;
  }

  .top h2 {
    flex: 1;
    font-size: 14px;
    text-align: center;
  }

  .uraban-post .avatar {
    padding: 15px;
    justify-content: center;
  }

  .content {
    padding: 10px;
  }

  .content p img {
    width: 100%;
  }

  blockquote {
    background: #2b2e37;
    padding: 10px;
    margin: 10px 0;
    font-size: 13px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 0.3s
  }

  .fade-enter, .fade-leave-to {
    transform: translate3d(100%, 0, 0)
  }

</style>