<template>
  <div>
    <div class="title">去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.url"  alt=""/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          url: 'https://imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg',
          title: '武汉-三亚',
          desc: '自由行】无边际海景泳池✪三亚大东海网红哈曼☪豪华海景房+游艇出海含潜水+旅拍+接送机'
        },
        {
          id: '002',
          url: 'https://imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg',
          title: '武汉-束河',
          desc: '跟团游】春节出游享优惠丨可免费升级动车、印象丽江丨敞篷吉普旅拍+私人游艇+温泉+花海'
        },
        {
          id: '003',
          url: 'https://imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg',
          title: '武汉-海口',
          desc: '跟团游】春节三亚超值纯玩5日游+帆船游艇出海|分界洲/大小洞天/天涯海角/玫瑰谷'
        }
      ]
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
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 30.6%
  .item-img
    box-sizing border-box
    width 100%
  .item-info
    padding: .25rem
    .item-title
      line-height: 1.3rem
      font-size: 1.1rem
      ellipsis()
    .item-desc
      margin-top .2rem
      line-height: 1.3rem
      font-size .9rem
      color: #ccc
      ellipsis()

</style>
