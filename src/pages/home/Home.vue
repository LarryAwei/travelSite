<template>
  <div>
    <home-header/>
    <home-swiper/>
    <div>text</div>
  </div>

</template>

<script>
import homeHeader from './components/header'
import homeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper
  }
}
</script>

<style scoped>

</style>
