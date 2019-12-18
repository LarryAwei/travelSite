<template>
  <div>
    <div class="search">
      <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li v-for="item of list" :key="item.id" class="search-item border-bottom">{{item.name}}</li>
        <li class="serch-item border-bottom" v-show="hasNoData">无数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
// import { mapMutations } from 'vuex'
export default {
  name: 'citySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.search, {})
    })
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    }
    // ...mapMutations(['changeCity'])
  }

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
    top: 4.5rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: 1.5rem
      padding-left: .5rem
      background: #fff
      color: #666
</style>
