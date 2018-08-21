<template>
  <div class="sort">
    <ul>
      <router-link to="/idanmu/sort/comic">
        <li><i class="iconfont icon-book"></i>漫画</li>
      </router-link>
      <router-link to="/idanmu/sort/anime">
        <li><i class="iconfont icon-tv"></i>动画</li>
      </router-link>
      <router-link to="/idanmu/sort/game">
        <li><i class="iconfont icon-game"></i>游戏</li>
      </router-link>
      <router-link to="/idanmu/sort/music">
        <li><i class="iconfont icon-music"></i>音乐</li>
      </router-link>
      <router-link to="/idanmu/sort/other">
        <li><i class="iconfont icon-other"></i>杂物</li>
      </router-link>
      <router-link to="/idanmu/sort/imgpack">
        <li><i class="iconfont icon-image"></i>图包</li>
      </router-link>
    </ul>
  </div>

</template>

<script>
  export default {}
</script>

<style scoped>
  .sort{
    margin-top: 70px;
  }
  .sort ul{
    font-size: 0;
  }

  .sort a{
    padding: 10px;
    box-sizing: border-box;
    display: block;
    float: left;
    width: 50%;
  }


  .sort li{
    padding: 20px;
    background: #2b2e37;
    font-size: 16px;
    box-sizing: border-box;
    text-align: center;
  }

  .iconfont{
    color: #ff677d;
    font-size: 20px;
    margin-right: 10px;
  }

</style>