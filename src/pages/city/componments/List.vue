<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="inneritem of item" :key="inneritem.id" @click="handleCityClick(inneritem.name)">{{inneritem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'cityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        // console.log(this.$refs[this.letter])
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/variables.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .list
    position absolute
    top 4.5rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
      line-height 1.5rem
      background #eaeaea
      padding-left .5rem
      color #666
    .button-list
      overflow hidden
      padding .5rem
      .button-wrapper
        float left
        width 33.33%
        .button
          padding .5rem
          text-align center
          margin: .5rem
          border .1rem solid #ccc
          border-radius .5rem
          font-size .9rem
    .item-list
      .item
        line-height 1.5rem
        padding-left .3rem
        font-size 0.6rem
      .border-bottom
        &:before
          border-color: #ccc
</style>
