<template>
  <div class="article-list" @scrollToEnd="getMore">
    <ul>
      <li v-for="item in article" @click="selectItem(item)" :key="item._id">
        <div class="suo">
          <img v-lazy="getSuo(item.content)" alt="">
        </div>
        <div class="content">
          <h2>{{item.title}}</h2>
          <div class="bio">
            <img v-lazy="getAvatar(item.author.qq)" alt="">
            <p>{{item.author.name}}</p>
          </div>
        </div>

      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  // import Scroll from 'base/scroll/scroll'

  export default {
    props: ['article', 'sw'],
    mounted() {
      window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        const innerHeight = window.innerHeight
        const offsetHeight = document.documentElement.offsetHeight || document.body.offsetHeight
        const t = scrollTop + innerHeight - offsetHeight
        if (t === 0) {
          if (this.sw) {
            this.$emit('getMore')
          }
        }
      })

    },
    methods: {
      getSuo(content) {
        const str = content.replace(/www.uraban.me/g, 'pic.51xiaoxin.com/www.uraban.me')
        return str.match(/suo(.+?)\)/i)[1].slice(2)
      },
      getAvatar(qq) {
        return `http://q2.qlogo.cn/headimg_dl?dst_uin=` + qq + `&spec=100`
      },
      selectItem(item) {
        this.$router.push({
          path: `/idanmu/home/${item._id}`
        })
      },
      getMore() {
        this.$emit('getMore')
      },
      // pollRefresh(){
      //   this.$emit('refresh')
      // }
    }
  }
</script>

<style scoped>
  .article-list {
    margin-top: 51px;
    margin-bottom: 61px

  }

  .article-list li {
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 14px;
  }

  .article-list li:nth-of-type(odd) {
    background: #13151c;
  }

  .article-list .content {
    flex: 1;
  }

  .article-list::-webkit-scrollbar {
    display: none;
  }

  .content img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }

  .content {
    padding: 10px;
  }

  .bio {
    display: flex;
    align-items: center;
    padding-top: 10px;
  }

  .bio p {
    flex: 1;
  }

  .bio img {
    margin-right: 10px;
  }
  .suo{
    height: 100px;
    width: 120px;
    margin-right: 10px;
    background: #242833;
  }

  .suo img {
    height: 100px;
    width: 120px;
    object-fit: cover;
  }

</style>