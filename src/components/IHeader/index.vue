<template>
  <header class="i-header">
    <div class="header-inner">
      <svg-icon icon-class="logo-iqiyi" class-name="qy-logo"></svg-icon>

      <!-- 搜索框 -->
      <div class="qy-search">
        <div class="search-box">
          <!-- 搜索输入框 -->
          <span class="search-box-in">
            <input
              class="search-input"
              placeholder="王牌对王牌第5季2020"
              @focus="showSearchResult = true"
              @blur="showSearchResult = false"
            />
            <a class="search-hot">
              <i class="qy-svgicon qy-svgicon-rank-hot2"></i>
              热搜榜
            </a>
          </span>
          <!-- 搜索按钮 -->
          <span class="search-box-out">
            <span class="search-box-btn">
              <i class="qy-svgicon qy-svgicon-search"></i>
            </span>
          </span>
        </div>
        <!-- 搜索列表框 -->
        <div v-show="showSearchResult" class="search-result">
          <div class="search-result-con" >
            <!-- 历史搜索记录 -->
            <div v-if="searchHistroyList.length > 0" class="search-result-history">
              <div class="search-result-title">
                历史搜索
                <span class="search-result-clear" @mousedown="clearSearchHistory()">
                  <i class="qy-svgicon qy-svgicon-trashcan"></i>
                  清除记录
                </span>
              </div>
              <a
                v-for="item in searchHistroyList"
                :key="item"
                href="javascript:void(0);"
                class="search-result-item"
              >
                <div class="search-result-simple">
                  <span class="search-result-text">{{item}}</span>
                </div>
              </a>
            </div>

            <!-- 热门搜索 -->
            <div class="search-result-hot">
              <div class="search-result-title">热门搜索</div>
              <a v-for="(item, index) in searchHotList" :key="item" href="javascript:void(0);" class="search-result-item">
                <div class="search-result-simple">
                  <em :class="`search-result-num search-result-num${index + 1}`">{{index + 1}}</em>
                  <span class="search-result-text">{{item}}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      showSearchResult: false,
      test: 0,
      searchHistroyList: ['王牌对王牌'],
      searchHotList: [
        '青春有你',
        '快进者',
        '王牌对王牌',
        '奥特曼',
        '冰糖炖雪梨',
        '小猪佩奇',
        '爱情公寓',
        '无心法师',
        '安家'
      ]
    }
  },
  methods: {
    onShowSearchList () {
      this.showSearchResult = !this.showSearchResult
    },
    clearSearchHistory () {
      this.searchHistroyList = []
    }
  }
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
    box-sizing: border-box;
    padding: 0 87px;

    .qy-search {
      width: 360px;
      height: 42px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;

      .search-box {
        height: 100%;
        width: 100%;
        background-color: #333;
        border-radius: 21px;

        &:hover {
          background-color: #444;
          transition: background-color 0.2s;
        }

        .search-box-in {
          position: relative;
          width: 230px;
          display: block;
          letter-spacing: 0;
          padding-right: 80px;

          .search-input {
            width: 100%;
            padding: 11px 0;
            background-color: transparent;
            border: 0;
            outline: 0;
            text-indent: 17px;
            border-radius: 21px 0 0 21px;
            height: 20px;
            line-height: 20px;
            font-size: 16px;
            color: #999;
            font-family: Microsoft Yahei;
          }

          .search-hot {
            position: absolute;
            top: 50%;
            right: 10px;
            margin-top: -10px;
            color: #666;
            line-height: 20px;
            height: 20px;
            font-size: 14px;

            &:hover {
              color: #00be06;
              transition: color 0.2s;
            }
          }
        }

        .search-box-out {
          position: absolute;
          top: 0;
          right: 0;

          .search-box-btn {
            display: block;
            width: 50px;
            height: 18px;
            padding: 12px 0;
            line-height: 18px;
            background-color: #00be06;
            border-radius: 0 21px 21px 0;
            color: #fff;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
          }
        }
      }

      .search-result {
        position: absolute;
        width: 291px;
        left: 19px;
        right: 96px;
        top: 42px;
        z-index: 1001;

        .search-result-con {
          padding: 3px 0 6px;
          border: 1px solid #f0f0f0;
          border-top: 0;
          box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
          background-color: #fff;

          .search-result-title {
            height: 32px;
            padding: 0 10px 0 15px;
            line-height: 32px;
            font-size: 14px;
            color: #999;
          }

          .search-result-clear {
            float: right;
            color: #00be06;
            cursor: pointer;
          }

          .search-result-simple {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .search-result-item {
            display: block;
            height: 32px;
            padding: 0 10px 0 15px;
            line-height: 32px;
            font-size: 14px;
            color: #222;
            cursor: pointer;

            &:hover {
              color: #00be06;
              background-color: #f5f5f5;
            }
          }

          .search-result-num {
              display: inline-block;
              width: 23px;
              height: 18px;
              margin-right: 10px;
              line-height: 18px;
              color: #fff;
              border-radius: 0 9px 9px 0;
              background-color: #d8d8d8;
              text-align: center;
              &.search-result-num1 {
                background-color: #00be06;
              }
              &.search-result-num2 {
                background-color: #4cd150;
              }
              &.search-result-num3 {
                background-color: #99e59b;
              }
          }
        }
      }
    }

    .header-left {
      position: absolute;
      right: 0;
    }
  }
}

input {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark-color(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textfield;
  background-color: -internal-light-dark-color(white, black);
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 11px system-ui;
  padding: 1px;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}
</style>
