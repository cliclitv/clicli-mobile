<template>
    <div class="b-nav">
        <ul>
            <router-link to="/home"><i class="iconfont icon-home"></i>
                <li>首页</li>
            </router-link>
            <router-link to="/sort"><i class="iconfont icon-other"></i>
                <li>分类</li>
            </router-link>
            <router-link to="/author"><i class="iconfont icon-author"></i>
                <li>作者</li>
            </router-link>
            <router-link to="/me" class="me"><i class="iconfont icon-user"></i>
                <li>我
                    <div class="dot"></div>
                </li>

            </router-link>

        </ul>
    </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus">
    @import "~common/styl/variable"
    .b-nav
        position: fixed
        bottom: 0
        width: 100%
        border-top: 0.7px solid $border-color

    .b-nav ul
        background: $bg-color
        display: flex
        width: 100%
        font-size: 12px

    .b-nav a
        flex: 1
        padding: 6px
        text-align: center
        .me
            position relative

    .b-nav li i
        width: 60px

    .router-link-active
        color: $red

    .iconfont
        font-size: 20px

    .dot
        height: 8px
        width 8px
        border-radius 4px
        background $yellow
        position absolute
        right 25px
        top: 10px


</style>