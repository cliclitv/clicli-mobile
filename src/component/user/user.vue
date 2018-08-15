<template>
    <div class="user">
        <div class="login-info">
            <h1>登陆注册</h1>
            <p>登陆后享用更多功能</p>
            <ul>
                <router-link to="/user/login">
                    <li>登陆</li>
                </router-link>
                <router-link to="/user/register">
                    <li>注册</li>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: "user"
  }
</script>

<style scoped lang="stylus">
    @import "~common/styl/variable"


</style>