<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe6ac;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/variables.styl'
  .header
    position: relative
    overflow: hidden
    height: 2.5rem
    line-height: 2.5rem
    text-align: center
    color: #fff
    background: $bgColor
    font-size: 1rem
    .header-back
      position: absolute
      top: 0
      left: 0
      width: 2rem
      text-align: center
      font-size: 1.5rem
      color: #fff
</style>
