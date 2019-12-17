<template>
  <div>
    <div class="title">去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.url"  alt=""/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/mixins.styl'
  .title
    margin-top .5rem
    line-height 2.5rem
    background #eaeaea
    text-indent .5rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 30.6%
  .item-img
    box-sizing border-box
    width 100%
  .item-info
    padding: .25rem
    .item-title
      line-height: 1.3rem
      font-size: 1.1rem
      ellipsis()
    .item-desc
      margin-top .2rem
      line-height: 1.3rem
      font-size .9rem
      color: #ccc
      ellipsis()

</style>
