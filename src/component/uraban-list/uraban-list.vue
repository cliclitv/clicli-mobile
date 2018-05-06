<template>
  <div>
    <scroll class="uraban-list" :data="article" :pollup="pollup" @scrollToEnd="getMore">
      <ul>
        <li v-for="item in article" @click="selectItem(item)">
          <div class="bio">
            <div class="avatar">
              <img :src="getAvatar(item.author[0].mail)" alt="">
              <p class="name">{{item.author[0].name}}</p>
            </div>
          </div>
          <h2>{{item.title}}</h2>
          <p class="text" v-html="getText(item.text)"></p>
          <div class="bot">
           <span class="sort">
          {{item.categories[0].name}}
        </span>
          </div>
        </li>
      </ul>
    </scroll>
    <div class="option">
      <i class="iconfont icon-circle"></i>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import md5 from 'blueimp-md5'
  import marked from 'marked'
  import Scroll from 'base/scroll/scroll'

  export default {
    props: ['article'],
    data(){
      return{
        pollup:true
      }
    },
    methods: {
      getAvatar(avatar) {
        return 'http://avatar.tietuku.com/avatar/' + md5(avatar)
      },
      getText(text) {
        const str = text.replace(/www.uraban.me/g, 'pic.51xiaoxin.com/www.uraban.me');
        const mark = marked(str, {breaks: true})
        return mark.match(/([\s\S]*)more/)[1]

      },
      selectItem(item) {
        this.$router.push({
          path: `/uraban/home/${item.cid}`
        })
      },
      getMore(){
        this.$emit('getMore')
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style>
  .uraban-list {
    position: fixed;
    top: 51px;
    bottom: 20px;
    left: 0;
    right: 0;
  }

  .uraban-list li {
    padding: 10px;
    background: #272b35;
    margin: 10px 0;
  }

  .avatar {
    padding: 10px 0;
    display: flex;
    align-items: center;
  }

  .avatar img {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    margin-right: 10px;
  }

  .avatar .name {
    flex: 1;
  }

  .uraban-list h2 {
    font-size: 20px;
    padding: 10px 0;
  }

  .text img {
    width: 100%;
    margin: 10px 0;
  }

  .text {
    font-size: 14px;
    line-height: 1.4;
    margin: 10px 0;
  }

  .bot {
    margin-bottom: 10px;
  }

  .sort {
    background: #596789;
    padding: 0 10px;
    color: #fff;
    border-radius: 10px;
  }

  .option {
    position: fixed;
    text-align: center;
    line-height: 50px;
    height: 50px;
    width: 50px;
    bottom: 20px;
    right: 20px;

    color: #fff;
    background: rgba(72, 161, 255, .7);
    border-radius: 50%;
  }

  .option .icon-circle {
    font-size: 30px;
  }

</style>