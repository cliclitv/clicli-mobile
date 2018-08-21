<template>
    <div class="tab">
        <ul class="status">
            <router-link to="/home">
                <li>和谐区</li>
            </router-link>
        </ul>
    </div>

</template>

<script>
  export default {}
</script>

<style scoped lang="stylus">
    @import "~common/styl/variable"
    .tab
        position: fixed
        top: 0
        width: 100%
        background $bg-color
        border-bottom 0.7px solid $border-color
        z-index 3

    .tab ul
        display: flex
        justify-content: center
        font-size: 14px

    .tab ul a
        box-sizing: border-box

    .tab ul a li
        padding: 10px
        flex: 1
        text-align: center
        color: #fff
        width: 50px

    .router-link-active li
        border-bottom: 2px solid #fff


</style>