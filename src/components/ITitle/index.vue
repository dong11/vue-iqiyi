<template>
  <div class="i-title">
    <a class="title no-link" :title="titleName">
      <span :class="['qy-mod-icon', 'title-icon', titleIcon]"></span>
      <span class="title-text">{{titleName}}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    titleIcon: {
      type: String
    },
    titleName: {
      type: String
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.i-title {

  .title {
    display: inline-block;
    position: relative;
    padding-left: 38px;
  }

  .title-icon {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -14px;
  }

  .title-text {
    color: #222;
    font-size: 24px;
  }
}
</style>
