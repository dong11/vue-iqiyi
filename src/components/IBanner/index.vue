<template>
  <div class="qy-banner" @mouseover="settings.autoplay = false" @mouseout="settings.autoplay = true">
    <!-- 滚动 banner 图 -->
    <i-carousel
      v-model="selectIndex"
      :arrow="settings.arrow"
      :dots="settings.dots"
      :loop="settings.loop"
      :autoplay="settings.autoplay"
      :autoplay-speed="5000"
      :easing="settings.easing"
    >
      <i-carousel-item v-for="item in bannerList" :key="item.image_url">
        <div class="img-banner" :style="`background-image: url(${item.image_url})`"></div>
      </i-carousel-item>
    </i-carousel>
    <!-- 左侧 banner 菜单 -->
    <ul class="side-panel">
      <li v-for="(item, index) in bannerList" :key="item.image_url" :class="['side-item', {'selected': index === selectIndex}]" @mouseover="selectIndex = index">
        <span class="side-text side-title">{{item.title}}</span>
        <span class="side-text side-colon">: </span>
        <span class="side-text">{{item.desc}}</span>
      </li>
    </ul>
    <!-- 底部菜单 -->
    <div class="qy-nav-panel">
      <div class="nav-item">
        <div class="nav-list">
          <div class="nav-list-item">
            <span class="nav-list-item-text">娱乐</span>
          </div>
          <div class="nav-list-item">
            <span class="nav-list-item-text">娱乐</span>
          </div>
          <div class="nav-list-item">
            <span class="nav-list-item-text">娱乐</span>
          </div>
        </div>
        <div class="nav-list">
          <div class="nav-list-item">
            <span class="nav-list-item-text">娱乐</span>
          </div>
          <div class="nav-list-item">
            <span class="nav-list-item-text">娱乐</span>
          </div>
          <div class="nav-list-item">
            <span class="nav-list-item-text">娱乐</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      settings: {
        arrow: 'never',
        dots: 'none',
        loop: true,
        autoplay: true,
        autoplaySpeed: 5000,
        easing: 'none'
      },
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
      ],
      selectIndex: 0
    }
  },
  methods: {
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

  /** 右侧菜单 start */
  .side-panel {
    position: absolute;
    top: 0;
    right: 87px;
    width: 276px;
    background-color: rgba(0,0,0,.7);
    padding: 9px 0 7px;

    .side-item {
      padding: 9px 20px;
      color: #ddd;
      font-size: 0;
      cursor: pointer;
      height: 36px;
      line-height: 18px;
      margin-bottom: 1px;

      .side-text {
        font-size: 16px;
      }

      .side-title .side-desc {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &.selected {
        padding: 8px 20px;
        height: 74px;
        color: #00be06;
        line-height: normal;
        margin-top: -1px;
        margin-bottom: 0px;
        background-image: linear-gradient(90deg, rgba(0, 0, 0, .5), transparent);

        .side-title {
          display: block;
          font-size: 24px;
          // transition: font-size .2s ease-out;
        }

        .side-colon {
          display: none;
        }
      }
    }
  }
  /** 右侧菜单 end */

  /** 底部菜单 start */
  .qy-nav-panel {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 98px;
    padding: 10px 87px;
    padding-bottom: 13px;
    background-color: rgba(27,27,28,.96);

    .nav-item {
      height: 100%;
      padding-right: 2px;
      white-space: nowrap;
      display: inline-block;
      vertical-align: top;
      letter-spacing: 0;
      background: url('https://www.iqiyipic.com/common/fix/site-v4/nav-item-1335Bg-180425.png') no-repeat 100% 0;

      .nav-list {
        display: inline-block;
        margin-right: 29px;

        .nav-list-item {
          padding: 3px 0 4px;
          font-size: 13px;

          .nav-list-item-text {
            color: #ccc;
            cursor: pointer;

            &:hover {
              color: #00be06;
            }
          }
        }
      }
    }
  }
  /** 底部菜单 end */
}
</style>
