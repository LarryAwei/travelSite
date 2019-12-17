<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="ifshow">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img"  :src="item.url" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'homeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  computed: {
    ifshow () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background white !important
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 30%
    background #eaeaea
    .swiper-img
      max-width 100%
</style>
