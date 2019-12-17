<template>
  <div>
    <home-header/>
    <home-swiper/>
    <home-icons/>
    <home-recommend/>
    <home-weekend/>
  </div>

</template>

<script>
import homeHeader from './components/header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'
import homeRecommend from './components/Recommend'
import homeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  }
}
</script>

<style scoped>

</style>
