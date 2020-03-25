<template>
  <div class="qy-banner">
    <i-carousel arrow="never" dots="none" loop autoplay :autoplay-speed="5000">
      <i-carousel-item v-for="item in bannerList" :key="item.image_url">
        <div class="img-banner" :style="`background-image: url(${item.image_url})`"></div>
      </i-carousel-item>
    </i-carousel>
    <div class="side-panel">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerList: [
        {
          title: '民国奇探',
          desc: '胡一天张云龙探奇案',
          image_url: 'https://pic3.iqiyipic.com/common/lego/20200324/0c57b6e13a4d4e2b921dfc0ef2d9ace0.jpg'
        },
        {
          title: '鬓边',
          desc: '黄晓明尹正因戏结缘',
          image_url: 'https://pic0.iqiyipic.com/common/lego/20200324/40c176c84a0c4ad2953c9179d2a7b431.jpg'
        },
        {
          title: '无心法师3',
          desc: '青鸾无心毁契约',
          image_url: 'https://pic1.iqiyipic.com/common/lego/20200324/3066fc4f074340d6a2f5272fcbfc4006.jpg'
        },
        {
          title: '猎心者',
          desc: '李佳航帮张伟实现梦想',
          image_url: 'https://pic1.iqiyipic.com/common/lego/20200323/2be535fc3e08424ab6b1b4640e2b543d.jpg'
        },
        {
          title: '青春有你',
          desc: 'SNH大战AKB',
          image_url: 'https://pic2.iqiyipic.com/common/lego/20200322/b93e261f8ff043b0b1b257cbd6fcfb3d.jpg'
        },
        {
          title: '王牌',
          desc: '华晨宇谢广坤跨界合作',
          image_url: 'https://pic2.iqiyipic.com/common/lego/20200321/12a39bb8d34647e786d9b3bdd5fc0439.jpg'
        },
        {
          title: '如果岁月',
          desc: '靳东蒋欣重启爱情',
          image_url: 'https://pic3.iqiyipic.com/common/lego/20200320/eb9f315067a14fac92ed871a2b74cf40.jpg'
        },
        {
          title: '金刀秘卫',
          desc: '孙耀威化身锦衣卫',
          image_url: 'https://pic2.iqiyipic.com/common/lego/20200325/6feedf00a4454fde98c7a4e59c882c46.jpg'
        },
        {
          title: '街舞时代',
          desc: '街舞圈生存突围战',
          image_url: 'https://pic1.iqiyipic.com/common/lego/20200325/5c9cf074774745e5900e4bf8b99193d5.jpg'
        },
        {
          title: '快进者',
          desc: '救护车版速度与激情',
          image_url: 'https://pic2.iqiyipic.com/common/lego/20200324/e2b4b7061b954b9b8e837791bec3acf1.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.qy-banner {
  position: relative;
  width: 100%;
  height: 520px;

  .img-banner {
    width: 100vw;
    height: 520px;
    background-size: auto 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  .side-panel {
    position: absolute;
    top: 0;
    right: 87px;
    height: 100%;
    width: 276px;
    background-color: rgba(0,0,0,.7);
  }
}
</style>
