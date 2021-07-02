<template>
  <div>
    <div class="topfix">
      <h1>
        <img src="@/assets/01.gif" alt="" />
      </h1>
      <div class="button">下载APP</div>
    </div>
    <div class="tab">
      <van-tabs v-model="activeName">
        <van-tab title="推荐音乐" name="a">
          <tjmusic></tjmusic>
        </van-tab>
        <van-tab title="热歌榜" name="b">
          <HitList></HitList>
        </van-tab>
        <van-tab title="搜索" name="c">
          <search></search>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import tjmusic from "./tjmusic";
import HitList from "./HitList";
import search from "./search";
export default {
  components: {
    tjmusic,
    HitList,
    search
  },
  data() {
    return {
      activeName: "a",
    };
  },
};
</script>

<style lang="less"  scoped>
.topfix {
  width: 100%;
  height: 84px;
  background-color: #d43c33;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 6;
  .button {
    height: 36px;
    width: 100px;
    background-color: #fff;
    text-align: center;
    line-height: 36px;
    color: #d43c33;
    border-radius: 37.5px;
    font-size: 16px;
  }
}
/deep/ .tab {
  margin-top: 84px;
  .van-tabs {
    .van-tabs__content {
      margin-top: 124px;
      background: #fcfcfd;
    }
    .van-tabs__wrap {
      height: 40px !important;
      border-bottom: 1px solid #ccc !important;
      background-color: #fff;
      position: fixed;
      width: 100%;
      top: 84px;
      z-index: 5;
      .van-tabs__line {
        width: 60px;
        height: 2px;
      }
      .van-tab--active {
        color: rgb(211, 0, 27);
      }
    }
  }
}
</style>