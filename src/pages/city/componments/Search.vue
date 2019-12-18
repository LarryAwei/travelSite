<template>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名">
    </div>
</template>

<script>
export default {
  name: 'citySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/variables.styl'
  .search
    height: 2rem
    padding: 0 .3rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: 1.7rem
      padding: 0 .5rem
      line-height: 1.7rem
      text-align: center
      border-radius: .5rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
