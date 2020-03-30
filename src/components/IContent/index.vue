<template>
  <div class="i-content">
    <i-title title-name="今日聚焦" title-icon="focuplay"></i-title>
  </div>
</template>

<script>
import ITitle from '../ITitle'

export default {
  components: {
    'i-title': ITitle
  }
}
</script>
<style>
.focuplay {
  background-position: 0 0;
}
</style>
<style lang="scss" scoped>
.i-content {
  padding: 0 87px;
}
</style>
