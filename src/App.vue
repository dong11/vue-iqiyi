<template>
  <div id="app">
    <i-header></i-header>
    <i-banner></i-banner>
    <i-content></i-content>
    <i-footer></i-footer>
  </div>
</template>

<script>
import IHeader from '@/components/IHeader'
import IBanner from '@/components/IBanner'
import IContent from '@/components/IContent'
import IFooter from '@/components/IFooter'

export default {
  name: 'App',
  components: {
    'i-header': IHeader,
    'i-banner': IBanner,
    'i-content': IContent,
    'i-footer': IFooter
  }
}
</script>

<style>
@font-face {
  font-family: iconfont;
  src: url(https://static.qiyi.com/ext/common/pcw-v4-font/iconfont.eot);
  src: url(https://static.qiyi.com/ext/common/pcw-v4-font/iconfont.eot#iefix)
      format("embedded-opentype"),
    url(https://static.qiyi.com/ext/common/pcw-v4-font/iconfont.woff)
      format("woff"),
    url(https://static.qiyi.com/ext/common/pcw-v4-font/iconfont.ttf)
      format("truetype"),
    url(https://static.qiyi.com/ext/common/pcw-v4-font/iconfont.svg#iconfont)
      format("svg");
}

.qy-svgicon {
  vertical-align: -1px;
  font-family: iconfont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.qy-svgicon-search:before {
  content: "\E866";
}

.qy-svgicon-rank-hot2:before {
  content: "\EA7C";
}

.qy-svgicon-trashcan:before {
    content: "\E867"
}

.qy-mod-icon {
  width: 28px;
  height: 28px;
  background: url('https://www.iqiyipic.com/common/fix/site-v4/sprite-channelTitle-icons@2x-0422.png') no-repeat 50%;
  background-size: 400px 120px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.no-link {
  cursor: default;
}
</style>
