<template>
  <div>
    <!-- {{this.$route.query.id}} -->
    <div class="songlist">
      <div
        class="songbg"
        :style="{ background: 'url(' + Playlist.coverImgUrl + ')' }"
      ></div>
      <div class="songcon">
        <div class="songcon-left">
          <img :src="Playlist.coverImgUrl" alt="" />
          <span>歌单</span>
          <i>{{ Playlist.playCount | count }}万</i>
        </div>
        <div class="songcon-right">
          <h2>{{ Playlist.name }}</h2>
          <span>
            <div class="userimg">
              <img :src="Playlist.creator.avatarUrl" alt="" />
              <b></b>
            </div>
            <p>{{ Playlist.creator.nickname }}</p>
          </span>
        </div>
      </div>
    </div>
    <!-- {{musiclist}} -->
    <div class="songitem">
      <div class="musiclist">
        <h3>歌曲列表</h3>
        <dl
          v-for="(item, index) in musiclist.songs"
          :key="index"
          @click="toPlay(item.id)"
        >
          <dt>{{ index + 1 }}</dt>
          <dd>
            <div class="hotleft">
              <p>{{ item.name }}</p>
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
      <div class="jc-comment">
        <h3>精彩评论</h3>
        <ul>
          <li v-for="(item, index) in hitcom.hotComments" :key="index">
            <div class="userimg">
              <img :src="item.user.avatarUrl" alt="" />
            </div>
            <div class="commentright">
              <div class="cmt-hd">
                <p>{{ item.user.nickname }}</p>
                <span>{{item.time | moment}}</span>
                <b
                  >{{ item.likedCount
                  }}<svg
                    class="u-svg u-svg-unzancmt"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                  >
                    <path
                      fill="#999"
                      d="m25.857 14.752c-.015.059-1.506 5.867-2.932 8.813-1.162 2.402-3 2.436-3.099 2.436h-12.826v-13c3 0 5.728-4 5.728-7.275 0-3.725 1.433-3.725 2.142-3.725 1.327 0 1.978 1.345 1.978 4 0 2.872-.832 4.525-.839 4.537-.161.31-.155.682.027.981.181.299.5.482.849.482h6.942c.922 0 1.551.215 1.866.64.467.626.286 1.705.164 2.112m-23.857 10.248v-10c0-1.795.659-1.981.855-2h2.145v13h-2.173c-.829 0-.827-.648-.827-1m25.309-13.54c-.713-.969-1.886-1.46-3.482-1.46h-5.519c.26-.932.519-2.285.519-4 0-5.221-2.507-6-4-6-1.909 0-4.185.993-4.185 5.725 0 2.206-1.923 5.275-3.815 5.275h-4-.011c-1.034.011-2.816.862-2.816 4v10.02c0 1.198.675 2.979 2.827 2.979h16.971.035c.364 0 3.224-.113 4.894-3.564 1.514-3.127 3.01-8.942 3.056-9.14.071-.23.664-2.289-.474-3.836"
                    ></path></svg
                ></b>
              </div>
              <div class="cmd-con">
                <p>
                  {{ item.content }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="jc-comment">
        <h3>最新评论({{ comlist.comments.length }})</h3>
        <ul>
          <li v-for="(item, index) in comlist.comments" :key="index">
            <div class="userimg">
              <img :src="item.user.avatarUrl" alt="" />
            </div>
            <div class="commentright">
              <div class="cmt-hd">
                <p>{{ item.user.nickname }}</p>
                <span> {{ item.time | moment }}</span>
                <b
                  >{{ item.likedCount
                  }}<svg
                    class="u-svg u-svg-unzancmt"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                  >
                    <path
                      fill="#999"
                      d="m25.857 14.752c-.015.059-1.506 5.867-2.932 8.813-1.162 2.402-3 2.436-3.099 2.436h-12.826v-13c3 0 5.728-4 5.728-7.275 0-3.725 1.433-3.725 2.142-3.725 1.327 0 1.978 1.345 1.978 4 0 2.872-.832 4.525-.839 4.537-.161.31-.155.682.027.981.181.299.5.482.849.482h6.942c.922 0 1.551.215 1.866.64.467.626.286 1.705.164 2.112m-23.857 10.248v-10c0-1.795.659-1.981.855-2h2.145v13h-2.173c-.829 0-.827-.648-.827-1m25.309-13.54c-.713-.969-1.886-1.46-3.482-1.46h-5.519c.26-.932.519-2.285.519-4 0-5.221-2.507-6-4-6-1.909 0-4.185.993-4.185 5.725 0 2.206-1.923 5.275-3.815 5.275h-4-.011c-1.034.011-2.816.862-2.816 4v10.02c0 1.198.675 2.979 2.827 2.979h16.971.035c.364 0 3.224-.113 4.894-3.564 1.514-3.127 3.01-8.942 3.056-9.14.071-.23.664-2.289-.474-3.836"
                    ></path></svg
                ></b>
              </div>
              <div class="cmd-con">
                <p>
                  {{ item.content }}
                </p>
                <!-- <p>ffffffff </p> -->
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer">
        <span>查看全部条评论</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 获取对应歌单的数据
      Playlist: [],
      // 接受歌单数据id
      musicid: [],
      // 遍历接受全部id
      musicid1: [],
      // 将全部id转换字符串
      Strmusicid: [],
      // 接收歌曲的数组
      musiclist: [],
      // 获取评论数组
      comlist: [],
      // 获取热门评论数组
      hitcom: [],
    };
  },
  mounted() {
    this.getList(); //歌单数据
    this.getcomlist(); //歌单评论
    this.gethitcom(); //热门评论
  },
  methods: {
    // 获取对应歌单的数据
    getList() {
      let id = this.$route.query.id;
      // console.log(id,'111111');
      this.$http.get(`/playlist/detail?id=${id}`).then((res) => {
        // console.log(res, "res");
        if (res.status == 200) {
          this.Playlist = res.data.playlist;
          this.musicid = res.data.playlist.trackIds;
          this.musicid.forEach((item) => {
            this.musicid1.push(item.id);
          });
          this.Strmusicid = this.musicid1.toString();
          // 获取歌单里面的歌曲
          this.$http
            .get("/song/detail?ids=" + this.Strmusicid + "")
            .then((res) => {
              // console.log(res);
              if (res.status == 200) {
                this.musiclist = res.data;
                // console.log(this.musiclist, "歌曲名称");
              } else {
                this.$Message.error(res.msg);
              }
            });
        } else {
          this.$Message.error(res.msg);
        }
        // console.log(this.musiclist,'歌名');
      });
    },
    // 获取歌单评论
    getcomlist() {
      let id = this.$route.query.id;
      this.$http.get("/comment/playlist?id=" + id + "").then((res) => {
        // console.log(res, "id");
        if (res.status == 200) {
          this.comlist = res.data;
          // console.log(this.comlist, "歌曲评论");
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    // 获取热门评论
    gethitcom() {
      let id = this.$route.query.id;
      this.$http.get("/comment/hot?id=" + id + "&type=2").then((res) => {
        // console.log(res, "id");
        if (res.status == 200) {
          this.hitcom = res.data;
          console.log(this.hitcom, "热门评论");
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
  // 换算推荐歌单单位
  filters: {
    count(val) {
      return (val / 10000).toFixed(1);
    },
  },
};
</script>

<style lang="less" scoped>
.songlist {
  padding: 30px 10px 30px 15px;
  position: relative;
  overflow: hidden;
  .songbg {
    // background: url("https://p4.music.126.net/FMoa8czDLyzp2irg85trtQ==/109951165548182302.jpg?param=170y170");
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(20px);
    transform: scale(1.5);
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.25);
    }
  }
  .songcon {
    position: relative;
    z-index: 2;
    display: flex;
    .songcon-left {
      width: 126px;
      height: 126px;
      position: relative;
      img {
        display: block;
        width: 100%;
      }
      span {
        position: absolute;
        z-index: 3;
        top: 10px;
        left: 0;
        padding: 0 8px;
        height: 17px;
        color: #fff;
        font-size: 9px;
        text-align: center;
        line-height: 17px;
        background-color: rgba(217, 48, 48, 0.8);
        border-top-right-radius: 17px;
        border-bottom-right-radius: 17px;
      }
      i {
        background: rgba(0, 0, 0, 0.3)
          url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+");
        position: absolute;
        right: 2px;
        top: 0;
        z-index: 3;
        padding-left: 15px;
        color: #fff;
        font-size: 12px;
        background-position: 0;
        background-repeat: no-repeat;
        background-size: 11px 10px;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.15);
        font-style: normal;
      }
    }
    .songcon-right {
      margin-left: 16px;
      h2 {
        padding-top: 1px;
        font-size: 17px;
        line-height: 1.3;
        color: #fefefe;
        height: 44px;
        font-weight: 400;
      }
      span {
        display: block;
        margin-top: 20px;
        display: flex;
        .userimg {
          position: relative;
          width: 30px;
          height: 30px;
          margin-right: 5px;
          img {
            display: inline-block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
          b {
            position: absolute;
            background: url("https://s3.music.126.net/mobile-new/img/usericn_2x.png?6423c0681bfb3358d5c684c9b998e412=");
            background-size: 70px auto;
            background-position: -37px 0;
            right: -5px;
            bottom: 0;
            width: 12px;
            height: 12px;
          }
        }
        p {
          color: hsla(0, 0%, 100%, 0.7);
        }
      }
    }
  }
}
.songitem {
  .musiclist {
    h3 {
      height: 23px;
      line-height: 23px;
      padding: 0 10px;
      font-size: 12px;
      color: #666;
      background-color: #eeeff0;
    }
    dl {
      display: flex;
      padding: 6px 0;
      &:last-child {
        dd {
          border: none;
        }
      }
      dt {
        flex: 1;
        text-align: center;
        font-size: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
      }
      dd {
        flex: 9;
        display: flex;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        padding-right: 5px;
        .hotleft {
          flex: 9;
          p {
            font-size: 17px;
            color: #333;
          }
          span {
            font-size: 12px;
            color: #888;
            margin-right: 5px;
            //   background: #000;
            // &:nth-child(2)::before {
            //   content: "";
            //   display: inline-block;
            //   width: 12px;
            //   height: 8px;
            //   background-image: url(https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=);
            //   background-repeat: no-repeat;
            //   background-size: 166px 97px;
            //   margin-right: 4px;
            // }
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
  .jc-comment {
    h3 {
      height: 23px;
      line-height: 23px;
      padding: 0 10px;
      font-size: 12px;
      color: #666;
      background-color: #eeeff0;
    }
    ul {
      li {
        padding-top: 10px;
        display: flex;
        &:last-child {
          .commentright {
            border: none;
          }
        }
        .userimg {
          flex: 1;
          height: 30px;
          margin: 0 15px;
          img {
            display: inline-block;
            width: 30px;
            height: 100%;
            border-radius: 50%;
          }
        }
        .commentright {
          padding: 0 10px 11px 0;
          flex: 9;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          // box-sizing: content-box !important;
          .cmt-hd {
            position: relative;
            p {
              font-size: 14px;
              color: #666;
              line-height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            span {
              font-size: 9px;
              color: #999;
            }
            b {
              position: absolute;
              left: 77%;
              top: 0;
              width: 65px;
              height: 22px;
              line-height: 22px;
              font-size: 11px;
              color: #999;
              text-align: right;
              svg {
                display: inline-block;
                width: 14px;
                height: 14px;
                margin-left: 6px;
                line-height: 0;
                vertical-align: middle;
                cursor: pointer;
              }
            }
          }
          .cmd-con {
            color: #333;
            font-size: 15px;
            line-height: 22px;
            margin-top: 5px;
          }
        }
      }
    }
  }
  .footer {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: block;
    // margin: 0 50px;
    padding: 18px 0;
    font-size: 14px;
    color: #999;
    text-align: center;
    line-height: 1;
  }
}
</style>