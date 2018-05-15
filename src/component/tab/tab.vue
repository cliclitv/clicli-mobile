<template>
  <div class="tab">
    <ul :style="style" class="status">
      <router-link to="/idanmu/home" @click.native="changeBg('#ff677d')">
        <li>后庭花</li>
      </router-link>
      <router-link to="/uraban/home" @click.native="changeBg('#48a1ff')">
        <li class="uraban">里世界</li>
      </router-link>
    </ul>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        style: {
          background: '#ff677d',
        }
      }
    },
    methods: {
      changeBg(bg) {
        this.style = {background: bg}
      }
    }
  }
</script>

<style scoped>
  .tab {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
  }

  .tab ul {
    display: flex;
    justify-content: center;
    font-size: 14px;
  }

  .tab ul a {
    box-sizing: border-box;
  }

  .tab ul a li {
    padding: 10px;
    flex: 1;
    text-align: center;
    color: #fff;
    width: 50px;
  }

  .router-link-active li {
    border-bottom: 2px solid #fff;
  }

  .uraban.router-link-exact-active li {
    border-bottom: 2px solid #fff;
  }

  .uraban.router-link-active li {
    border-bottom: none;
  }


</style>