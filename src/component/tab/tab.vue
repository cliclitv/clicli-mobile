<template>
  <div class="tab">
    <ul>
      <router-link to="/idanmu">
        <li>后庭花</li>
      </router-link>
      <router-link to="/uraban">
        <li class="uraban">里世界</li>
      </router-link>
    </ul>
  </div>

</template>

<script>
  export default {}
</script>

<style scoped>
  .tab {
  }

  .tab ul {
    display: flex;
    justify-content: center;
    background: #ff677d;
    font-size: 13px;
  }

  .tab ul a {
    box-sizing: border-box;
  }

  .tab ul a li {
    padding: 14px;
    flex: 1;
    text-align: center;
    color: #fff;
    width: 50px;
  }

  .router-link-active li {
    border-bottom: 2px solid #fff;
  }

  .uraban.router-link-exact-active li{
    border-bottom: 2px solid #fff;
  }

  .uraban.router-link-active li{
    border-bottom:none;
  }


</style>