<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
          <img class="item-img" :src="item.url"  alt=""/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend',
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
  .item
    overflow: hidden
    display: flex
    height: 5.5rem
    //background brown
    .item-img
      box-sizing border-box
      width: 8rem
      height: 5.5rem
      padding: .25rem
    .item-info
      flex: 1
      padding: .25rem
      min-width: 0
      .item-title
        line-height: 1.3rem
        font-size: 1.2rem
        ellipsis()
      .item-desc
        margin-top .2rem
        line-height: 1.3rem
        font-size .9rem
        color: #ccc
        ellipsis()
      .item-button
        float right
        line-height: 1.5rem
        margin-top: .5rem
        margin-right: .5rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .6rem
        color: #fff
</style>
