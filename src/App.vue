<template>
  <div id="app">
    <i-header></i-header>
    <i-banner></i-banner>
  </div>
</template>

<script>
import IHeader from '@/components/IHeader'
import IBanner from '@/components/IBanner'

export default {
  name: 'App',
  components: {
    'i-header': IHeader,
    'i-banner': IBanner
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

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
