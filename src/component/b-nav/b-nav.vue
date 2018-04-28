<template>
  <div class="b-nav">
    <ul>
      <router-link to="/idanmu"><i class="iconfont icon-home"></i>
        <li>首页</li>
      </router-link>
      <router-link to="/idanmu/sort"><i class="iconfont icon-other"></i>
        <li>分类</li>
      </router-link>
      <router-link to="/idanmu/author"><i class="iconfont icon-author"></i>
        <li>作者</li>
      </router-link>
      <router-link to="/idanmu/user"><i class="iconfont icon-user"></i>
        <li>用户</li>
      </router-link>

    </ul>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .b-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .b-nav ul {
    background: #2b2e37;
    display: flex;
    width: 100%;
    font-size: 12px;
  }

  .b-nav a {
    flex: 1;
    padding: 15px;
    text-align: center;
  }

  .b-nav a li {
  }

  .b-nav li i {
    width: 60px;
  }

  .router-link-active {
    color: #ff677d;
  }

  .iconfont {
    font-size: 20px;
  }

</style>