<template>
  <header class="i-header">
    <div class="header-inner">
      <svg-icon icon-class="logo-iqiyi" class-name="qy-logo"></svg-icon>

      <div class="qy-search">
        <div class="search-box">
          <span class="search-box-in">
            <input class="search-input">
            <i>热搜榜</i>
          </span>
          <span class="search-box-out"></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
.qy-logo {
  float: left;
  width: 120px !important;
  height: 40px !important;
  fill: #00be06 !important;
}
</style>

<style lang="scss" scoped>
.i-header {
  width: 100%;
  height: 64px;
  background-color: #232325;

  .header-inner {
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .qy-search {
      width: 360px;
      height: 42px;
      position: relative;
      display: flex;
      align-items: center;

      .search-box {
        height: 100%;

        .search-box-in {
          position: relative;
          width: 230px;

          .search-input {

          }

          .search-hot {
            position: absolute;
            right: 60px;
          }
        }

        .search-box-out {

        }
      }
    }
  }
}
</style>
