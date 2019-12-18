<template>
<div class="header">
  <div class="header-left">
    <span class="iconfont back-icon">&#xe6ac;</span>
  </div>
  <div class="header-input iconfont">&#xe6a2;输入地点</div>
  <router-link to="/city">
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow">&#xe6a4;</span>
    </div>
  </router-link>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'homeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/variables.styl'
.header
  height 2.5rem
  line-height 2.5rem
  display flex
  background $bgColor
  color #fff
.header-left
  width 2.5rem
  float left
  text-align center
  .back-icon
    font-size 1.5rem
.header-input
  flex 1
  background #fff
  border-radius .3rem
  height 2rem
  margin-top .25rem
  line-height 2rem
  padding-left .3rem
  color #ccc

.header-right
  color #eee
  min-width 5rem
  padding-left .2rem
  float right
  display flex
  justify-content center
  .arrow
    font-size 2rem
    margin-left -.25rem
</style>
