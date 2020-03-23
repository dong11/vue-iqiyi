<template>
  <div id="app">
    <i-header></i-header>
  </div>
</template>

<script>
import IHeader from '@/components/IHeader'

export default {
  name: 'App',
  components: {
    'i-header': IHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
