<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
          <img class="item-img" :src="item.url"  alt=""/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          url: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/8157000e-d06b-4eca-a788-25cbe6244aa0.jpg_r_480x320x90_24dd6ca0.jpg',
          title: '武汉-三亚',
          desc: '自由行】无边际海景泳池✪三亚大东海网红哈曼☪豪华海景房+游艇出海含潜水+旅拍+接送机'
        },
        {
          id: '002',
          url: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/9961355b-f5ac-42e1-915b-50dc8f83da5e.jpg_r_390x260x90_7db7b9b2.jpg',
          title: '武汉-束河',
          desc: '跟团游】春节出游享优惠丨可免费升级动车、印象丽江丨敞篷吉普旅拍+私人游艇+温泉+花海'
        },
        {
          id: '003',
          url: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/5958b155-6345-4dc8-afea-881a83d90c60.jpg_r_480x320x90_c9422665.jpg',
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
  .item
    overflow: hidden
    display: flex
    height: 5.5rem
    //background brown
    .item-img
      box-sizing border-box
      width: 8rem
      height: 5.5rem
      padding: .25rem
    .item-info
      flex: 1
      padding: .25rem
      min-width: 0
      .item-title
        line-height: 1.3rem
        font-size: 1.2rem
        ellipsis()
      .item-desc
        margin-top .2rem
        line-height: 1.3rem
        font-size .9rem
        color: #ccc
        ellipsis()
      .item-button
        float right
        line-height: 1.5rem
        margin-top: .5rem
        margin-right: .5rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .6rem
        color: #fff
</style>
