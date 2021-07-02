<template>
  <div>
    <form action="">
      <van-search
        v-model="searchvalue"
        shape="round"
        autofocus:true
        show-action:true
        background="#fcfcfd"
        @input="onsearch"
        @search="enterSearch"
        placeholder="搜索歌曲、歌手、专辑"
      />
    </form>
    <div class="Hotsearch" v-if="flag">
      <h5>热门搜索</h5>
      <ul>
        <li
          v-for="(item, index) in Hotsearch.hots"
          :key="index"
          @click="tosearch(item.first)"
        >
          <a href="javascript:;">{{ item.first }}</a>
        </li>
      </ul>
      <!-- {{Hotsearch}} -->
    </div>
    <div class="music" v-else>
      <ul>
        <li
          v-for="(item, index) in serachlist.songs"
          :key="index"
          @click="toPlay(item.id)"
        >
          <div class="musictitle">
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.artists" :key="index">{{
              item1.name
            }}</span
            ><span> - {{ item.name }}</span>
          </div>
          <div class="search">
            <a href="javascript:;">
              <img src="@/assets/lock.png" alt="" />
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="Records" v-show="num">
      <ul>
        <li v-for="(item, index) in history" :key="index">
          <div class="item-left">
            <span></span>
          </div>
          <div class="item-right">
            <!-- <p>历史</p>/ -->
            <p>{{ item }}</p>
            <span @click="remove(index)"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 创建热搜列表空数组
      Hotsearch: [],
      // 创建空字符串双向绑定
      searchvalue: "",
      // 创建搜索数据
      serachlist: [],
      // 热门搜索隐藏 1显示0隐藏
      num: true,
      // 音乐列表隐藏
      flag: true,
      // 接受历史记录的数组
      history: [],
    };
  },
  mounted() {
    this.getHotList(); //热搜数据
  },
  methods: {
    //   获取热搜列表数据简略
    getHotList() {
      this.$http.get("/search/hot").then((res) => {
        // console.log(res);
        if (res.status == 200) {
          this.Hotsearch = res.data.result;
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    // 获取搜索数据
    getSearchList() {
      this.$http.get(`/search?keywords=${this.searchvalue}`).then((res) => {
        if (res.status == 200) {
          this.serachlist = res.data.result;
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    // 输入框变化
    onsearch(val) {
      if (val != "") {
        this.searchvalue = val;
        this.num = false;
        this.getSearchList();
        this.flag = false;
      } else {
        this.num = true;
        this.flag = true;
      }
    },
    // 点击热门搜索跳出相应数据
    tosearch(item) {
      this.flag = false;
      this.searchvalue = item;
      this.getSearchList();
      this.num = false;
      this.history.push(this.searchvalue);
    },
    // 回车事件
    enterSearch() {
      this.music = true;
      this.num = false;
      this.getSearchList();
      this.history.push(this.searchvalue);
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
    // 点击删除历史记录
    remove(index) {
      console.log("删除");
      this.history.splice(index, 1);
    },
  },
};
</script>

<style lang="less" scoped>
form {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .van-search {
    padding: 15px 10px;
    .van-search__content {
      background-color: #ebecec;
    }
  }
}
.Hotsearch {
  padding: 15px 10px 0;
  h5 {
    font-size: 12px;
    line-height: 12px;
    color: #666;
    font-weight: 400;
  }
  ul {
    margin: 10px 0 7px;
    li {
      display: inline-block;
      height: 32px;
      margin-right: 8px;
      margin-bottom: 8px;
      padding: 0 14px;
      font-size: 14px;
      line-height: 32px;
      color: #333;
      border: 1px solid #d3d4da;
      border-radius: 32px;
      a {
        color: #333;
      }
    }
  }
}
.music {
  ul {
    //   display: flex;
    padding-left: 10px;
    li {
      padding: 6px 0;
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      .musictitle {
        flex: 9;
        p {
          font-size: 17px;
          color: #507daf;
        }
        span {
          font-size: 12px;
          color: #888;
          display: block;
          float: left;
          margin-right: 5px;
          // &:last-child{
          //   color: #507daf;
          // }
          &:nth-child(2):before {
            content: "";
            display: inline-block;
            width: 12px;
            height: 8px;
            background-image: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=");
            background-repeat: no-repeat;
            background-size: 166px 97px;
            margin-right: 4px;
          }
        }
      }
      .search {
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
.Records {
  ul {
    li {
      display: flex;
      height: 45px;
      line-height: 45px;
      .item-left {
        flex: 1;
        span {
          margin: 0 10px;
          width: 15px;
          height: 15px;
          background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljYWNhIiBkPSJNMTUgMzBDNi43MTYgMzAgMCAyMy4yODQgMCAxNVM2LjcxNiAwIDE1IDBzMTUgNi43MTYgMTUgMTUtNi43MTYgMTUtMTUgMTVtMC0yOEM3LjgyIDIgMiA3LjgyIDIgMTVzNS44MiAxMyAxMyAxMyAxMy01LjgyIDEzLTEzUzIyLjE4IDIgMTUgMm03IDE2aC04YTEgMSAwIDAgMS0xLTFWN2ExIDEgMCAxIDEgMiAwdjloN2ExIDEgMCAxIDEgMCAyIi8+PC9zdmc+");
          display: inline-block;
          vertical-align: middle;
          background-position: 0 0;
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
      .item-right {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        flex: 9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          margin-right: 20px;
          width: 12px;
          height: 12px;
          display: inline-block;
          background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjOTk5ODk5IiBkPSJNMTMuMzc5IDEybDEwLjMzOCAxMC4zMzdhLjk3NS45NzUgMCAxIDEtMS4zNzggMS4zNzlMMTIuMDAxIDEzLjM3OCAxLjY2MyAyMy43MTZhLjk3NC45NzQgMCAxIDEtMS4zNzgtMS4zNzlMMTAuNjIzIDEyIC4yODUgMS42NjJBLjk3NC45NzQgMCAxIDEgMS42NjMuMjg0bDEwLjMzOCAxMC4zMzhMMjIuMzM5LjI4NGEuOTc0Ljk3NCAwIDEgMSAxLjM3OCAxLjM3OEwxMy4zNzkgMTIiLz48L3N2Zz4=");
          display: inline-block;
          vertical-align: middle;
          background-position: 0 0;
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }
  }
}
</style>