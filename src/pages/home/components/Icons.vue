<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="ifshow">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.url" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        loop: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    ifshow () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/variables.styl'
  @import "~@/assets/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
    //background #eaeaea
  .icon
    position relative
    overflow hidden
    float left
    height 0
    width 25%
    padding-bottom 25%
    //background brown
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 1rem
      box-sizing border-box
      padding .4rem
      //background blue
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      text-align center
      font-size .75rem
      ellipsis()
      color $darkTextColor
</style>
