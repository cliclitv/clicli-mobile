<template>
    <div class="loading">
        <div class="spinner">
            <i></i>
        </div>
    </div>

</template>

<script>
  import {request} from "api/article"

  export default {
  }
</script>

<style scoped lang="stylus">
    @import "~common/styl/variable"
    @keyframes spinner-circle-clipper
        0%
            transform: rotate(0deg)

        to
            transform: rotate(180deg)

    @keyframes spinner-circle
        0%
            transform: rotate(-180deg)

        to
            transform: rotate(180deg)

    .spinner
        font-size: 20px
        width: 30px
        height: 30px
        margin: 100px auto
        border-radius: 50%
        box-shadow: inset 0 0 0 0.1em rgba(255, 255, 255, .3)
        position relative
        z-index: 999

    .spinner i
        animation spinner-circle-clipper 1s ease-in-out infinite

    .spinner i, .spinner i:after
        display inline-block
        position: absolute
        clip: rect(0, 30px, 30px, 15px)
        width: 30px
        height: 30px

    .spinner i:after
        content: ""
        animation: spinner-circle 1s ease-in-out infinite
        border-radius: 50%
        box-shadow: inset 0 0 0 3px $yellow
</style>
