// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import '@/icons' // icon
import 'view-design/dist/styles/iview.css'
import { Carousel, CarouselItem } from 'view-design'

Vue.component('i-carousel', Carousel)
Vue.component('i-carousel-item', CarouselItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
