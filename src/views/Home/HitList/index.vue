<template>
  <div>
    <div class="hoptop">
      <div class="hotopct">
        <div class="hoticon"></div>
        <div class="hottime">更新日期：12月24日</div>
      </div>
    </div>
    <div class="hotcont">
      <dl
        v-for="(item, index) in newlist.songs"
        :key="index"
        @click="toPlay(item.id)"
      >
        <dt>{{ index + 1 >= 10 ? index + 1 : "0" + (index + 1) }}</dt>
        <dd>
          <div class="hotleft">
            <p>{{ item.name }}</p>
            <!-- {{item}} -->
            <span v-for="(item1, index) in item.ar" :key="index">{{
              item1.name
            }}</span
            ><span>- {{ item.name }}</span>
          </div>
          <div class="hotright">
            <a href="javascript:;">
              <img src="@/assets/lock.png" alt="" />
            </a>
          </div>
        </dd>
      </dl>
    </div>
    <div class="hotbtn">
      <span>查看完整榜单<b>></b></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 歌单数据
      HitList: [],
      //   放歌曲id的数组
      listId: [],
      //   设置空字符串来获取到歌曲的id
      sonlist: "",
      //   最新歌曲数据
      newlist: [],
    };
  },
  mounted() {
    this.getHitList();
  },
  methods: {
    //   获取热歌榜数据
    getHitList() {
      this.$http.get("/playlist/detail?id=3778678").then((res) => {
        if (res.status == 200) {
          this.HitList = res.data.playlist.trackIds;
          this.HitList.forEach((item) => {
            if (this.listId.length < 20) {
              this.listId.push(item.id);
            }
            // this.listId.push(item.id);
          });
          this.sonlist = this.listId.toString();

          // 获取歌曲详情
          this.$http
            .get("/song/detail?ids=" + this.sonlist + "")
            .then((res) => {
              // console.log(res, "66666666666666666");
              if (res.status == 200) {
                this.newlist = res.data;
                // console.log(this.newlist, "热歌名称");
              } else {
                this.$Message.error(res.msg);
              }
            });
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    // 跳转到音乐播放
    toPlay(id) {
      // alert("跳转");
      let play = {
        path: "/plays",
        query: {
          id,
        },
      };
      this.$router.push(play);
    },
  },
};
</script>

<style lang="less"  scoped>
.hoptop {
  position: relative;
  padding-top: 38.9%;
  overflow: hidden;
  background: url("../../../assets/hot_music_bg.jpg");
  background-size: contain;
  .hotopct {
    padding-left: 20px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .hoticon {
      width: 142px;
      height: 67px;
      background: url("../../../assets/index_icon.jpg");
      background-position: -24px -30px;
      background-size: 166px 97px;
    }
    .hottime {
      font-size: 12px;
      margin-top: 10px;
      color: hsla(0, 0, 100%, 0.8);
    }
  }
}
.hotcont {
  dl {
    display: flex;
    padding: 6px 0;
    &:nth-child(-n + 3) {
      dt {
        color: #df3436;
      }
    }
    dt {
      flex: 1;
      text-align: center;
      font-size: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    dd {
      flex: 9;
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding-right: 5px;
      .hotleft {
        flex: 9;
        p {
          font-size: 17px;
        }
        span {
          font-size: 12px;
          color: #888;
          margin-right: 5px;
          //   background: #000;
          &:nth-child(2)::before {
            content: "";
            display: inline-block;
            width: 12px;
            height: 8px;
            background-image: url(https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=);
            background-repeat: no-repeat;
            background-size: 166px 97px;
            margin-right: 4px;
          }
        }
      }
      .hotright {
        flex: 1;
        a {
          height: 100%;
          display: block;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            display: block;
            width: 25px;
            height: 25px;
          }
        }
      }
    }
  }
}
.hotbtn {
  height: 55px;
  line-height: 55px;
  text-align: center;
  color: #999;
  b {
    color: #999;
    margin-left: 8px;
    font-weight: normal;
  }
}
</style>