<template>
  <div>
    <home-header/>
    <home-swiper/>
    <home-icons/>
  </div>

</template>

<script>
import homeHeader from './components/header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons
  }
}
</script>

<style scoped>

</style>
