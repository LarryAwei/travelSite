<template>
  <div class="icons">
    <swiper :options="swiperOption">
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
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        loop: true
      },
      iconList: [
        {
          id: '001',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc: '热门景点'
        },
        {
          id: '002',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '003',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id: '004',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '机票'
        },
        {
          id: '005',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc: '热门景点'
        },
        {
          id: '006',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '007',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id: '008',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '机票'
        },
        {
          id: '009',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
          desc: '火车票'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
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
