<template>
  <div class="video-list">
    <h1>在线</h1>
    <ul>
      <li v-for="item in videos" @click="selectItem(item)" :key="item.id">
        {{item.oid}}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "video-list",
    props: ['videos'],
    data() {
      return {
        selectId: 0,
        isShow: false
      }
    },
    methods: {
      selectItem(item) {
        this.$emit('select',item)
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~common/styl/variable"
  .video-list
    background $bg-color
    border-top: .7px solid $border-color
    padding: 10px
    li
      height 36px
      width 36px
      text-align center
      background $b-color
      display inline-block
      margin 5px
      border-radius 50%
      line-height 36px
    h1
      padding: 10px
    .player
      position fixed
      top: 0
      bottom: 0
      left 0
      right: 0
      background $b-color
      z-index 9999999

</style>