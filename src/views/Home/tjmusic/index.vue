<template>
  <div>
    <div class="Playlist">
      <!-- {{ Playlist }} -->
      <h2>推荐歌单</h2>
      <ul>
        <li
          v-for="(item, index) in Playlist.result"
          :key="index"
          @click="toPlaylist(item.id)"
        >
          <a href="javascript:;">
            <div class="playimg">
              <img :src="item.picUrl" alt="" />
              <span>{{ item.playCount | count }}万</span>
            </div>
            <p>{{ item.name }}</p>
          </a>
        </li>

        <!-- <router-link tag="li" to="playlist" v-for="(item, index) in Playlist.result" :key="index">
          <a href="javascript:;">
            <div class="playimg">
              <img :src="item.picUrl" alt="" />
              <span>{{ item.playCount | count }}万</span>
            </div>
            <p>{{ item.name }}</p>
          </a>
        </router-link> -->
      </ul>
    </div>
    <div class="newmusic">
      <h2>最新音乐</h2>
      <ul>
        <li
          v-for="(item, index) in Newlist.result"
          :key="index"
          @click="toPlay(item.id)"
        >
          <div class="musictitle">
            <p>{{ item.name }}</p>
            <span v-for="(item1, i) in item.song.artists" :key="i">{{
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
    <div class="footer">
      <div class="footercon">
        <div class="logo">
          <svg
            t="1609228885496"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1318"
            width="100%"
            height="240"
            font-size="100"
          >
            <path
              d="M244.5 496.1v55.1c0 11-9 22.1-17.9 26.6-5 2.5-10.3 3.2-15.9 3.2-34.9-0.1-69.9-0.1-104.8-0.1-17.3 0-31.7-15.8-31.6-31.6 0.2-36 0.1-72 0.1-108.1 0-11.7 8.3-22.8 18.5-27.6 4.7-2.2 9.6-3.1 14.8-3.1 35.3 0.1 70.6 0.1 105.9 0.1 12.1 0 23 8.2 28 18.4 2.3 4.7 3.1 9.6 3.1 14.8-0.3 17.5-0.2 34.9-0.2 52.3z m-62.7-19c0.2 0 0.8 0.1 1.3 0.1 0.5 0.1 1 0.1 1.4 0.4 8.5 4.5 14.9 11.3 16.9 20.7 2.4 11.5 0.1 22.3-7.8 31.5-12.7 14.8-36.2 18.4-53.4 9.4-18.7-9.7-30-34.5-21.8-55.9 4.2-11 10.7-19.8 21.4-25.2 2.8-1.4 5.8-2.7 8.4-4.5 3.5-2.4 4.1-6.3 2-9.8-1.8-3.1-6-4.5-9.3-3.2-19.1 7.5-31.7 20.8-38.1 40.5-4.7 14.6-3 28.5 2.9 42.2 4.2 9.6 10.6 17.5 19.1 24 7 5.3 14.6 8.9 22.9 10.8 13.3 3 26.3 1.2 38.8-4.4 22.2-9.9 37.2-35.5 29.2-61.3-4.3-13.8-13.4-23.2-26.4-28.9-4.2-1.8-8.8-2.7-13.6-4-0.4-3.1-1.1-6.5-1.3-9.9-0.2-4.3 4-6.9 7.9-5.1 2 0.9 3.9 2.2 5.8 3.3 5.3 3.1 10.2 1.9 12.2-3.2 1.1-2.9-0.2-7.4-3.5-9.4-3.6-2.2-7.6-3.8-11.5-5.5-9-4-20.7 2.5-25.3 10.6-3.1 5.4-2.3 11.3-0.8 17 0.5 2.1 2 4.4-1.1 5.8-1.5 0.7-3 1.3-4.5 2-13.5 5.8-21.6 23.6-17.7 38.2 3.4 12.6 18.5 23.2 31.6 18.7 8.3-2.8 19-12.8 17.8-23.5-0.6-7-2.2-14.1-3.5-21.4z"
              fill="#E00000"
              p-id="1319"
            ></path>
            <path
              d="M285.6 555.4V438.8c5.6 3.4 11.6 2.3 17.3 2.3 27.1 0.2 54.3 0 81.4 0.2 4.1 0 8.3 1 12.2 2.2 5 1.5 6.7 5.8 7 10.6 0.3 4.5 0.1 9.1 0.1 13.7 0 23.4-0.2 46.8 0.1 70.3 0.2 13.5-5.1 16-15.9 17.3-5.8 0.7-11.7 0.1-17.5 0.1-1.1-4.5 0.2-6.1 4.4-6.5 3.4-0.3 6.9-1 10.1-2 2.3-0.7 3.9-2.4 3.9-5.4-0.1-28.3 0-56.7-0.1-85 0-4.2-3.2-7-8.2-7-10-0.1-19.9 0-29.9 0-15.5 0-31 0.1-46.5-0.1-3 0-3.9 0.9-3.9 3.9 0.1 32.8 0 65.6 0.2 98.4 0 3.3-0.9 4.2-4.1 3.9-3.4-0.5-6.9-0.3-10.6-0.3zM887.7 461c4.6 0 8.9-0.1 13.1 0.1 0.6 0 1.6 1.5 1.6 2.4 0.1 6.5 0.2 13 0 19.5-0.1 3.1 0.7 4.2 4 4.1 12.4-0.2 24.7-0.1 37.1-0.1 5.2 0 7.6 2.4 7.9 8.1-0.8 0.1-1.6 0.2-2.3 0.2-14.4 0-28.8 0.1-43.2 0-2.7 0-3.5 0.9-3.5 3.5 0.1 13.9 0.1 27.9 0.1 41.8 0 10.3-3.1 14-13.2 14.8-6.6 0.5-13.2 0.1-19.8 0.1 1-5.5 2.1-6.2 7.5-6.7 2.7-0.2 5.6-0.8 7.9-2.1 1.5-0.9 2.6-3.6 2.6-5.4 0.2-14.4 0-28.8 0.1-43.2 0-2.8-1.7-2.7-3.6-2.7-10.1 0-20.2 0.1-30.3-0.1-3-0.1-6.3-0.6-9-1.9-4.5-2-6.3-6.5-6.1-11 0.8-14.2 2.1-28.4 3.3-42.9h20.9c26.8-0.2 53.6-0.3 80.3-0.6 2.5 0 2.9 1.2 2.9 3-0.1 1.9 0.4 4.2-2.9 4.3l-68.4 1.5c-5.2 0.1-10.3 0.1-15.5 0-1.9 0-2.8 0.5-3 2.6-0.6 10.2-1.4 20.3-2.2 30.5-0.4 5.2 0.6 6.2 5.7 6.3 7.9 0 15.9-0.1 23.8 0.1 3.2 0.1 4.1-1.1 4-4.2 0.1-7.3 0.2-14.5 0.2-22zM710.1 493.7c4.3 0.3 8.1 0.7 11.9 0.7 22.6 0.1 45.2 0 67.7 0 4.1 0 8.2 0.2 12.2 0.5 6.4 0.4 10.9 5.1 11 12.7 0.3 15 0.1 30 0.2 45 0 2.6-1.5 2.8-3.5 2.8-12.5-0.1-25 0-37.5 0-15.3 0-30.5 0.1-45.8-0.1-3.8 0-7.6-0.7-11.4-1.3-2.7-0.5-5-4.7-5-9.1v-50.1c0.1-0.4 0.2-0.9 0.2-1.1z m51.4 35.1c-11.1 0-22.1 0.1-33.2 0-2.6 0-3.7 0.8-3.5 3.5 0.2 2.5 0 5 0.1 7.6 0 4.8 2 7.2 6.8 7.2 21 0.1 42 0.1 63.1 0.1 2.1 0 3-0.8 2.9-3-0.2-3.7-0.3-7.5 0-11.2 0.3-3.3-0.7-4.4-4.1-4.3-10.7 0.2-21.4 0.1-32.1 0.1z m-0.3-8.5c10.9 0 21.8-0.1 32.8 0.1 2.6 0 3.8-0.7 3.6-3.4-0.2-2.9 0-5.8 0-8.6 0-5-0.8-6.1-5.8-6.1-21.1-0.1-42.2-0.1-63.3-0.1-2.6 0-3.7 1.2-3.6 3.8 0.1 3.5 0.2 7 0 10.4-0.3 3.2 0.9 4.1 4.1 4.1 10.6-0.3 21.4-0.2 32.2-0.2zM419.2 542.6c8.4-6.1 16.9-12 25.1-18.4 8.3-6.5 15.1-14.4 21.8-23.8-7.1 0-13.1-0.1-19 0.1-0.9 0-1.8 1.4-2.6 2.3-4.1 4.7-7.9 10-14 12.3-3.6 1.3-7.5 1.7-12.3 2.6 4.9-4.9 9.7-8.3 12.6-13 2.9-4.7 3.9-10.5 5.7-16.1 4.2 4.7 10 3.9 15.5 3.9 24.9 0.1 49.7 0.3 74.6-0.1 10.6-0.2 16.8 6.1 18.7 15.8 1.8 9.5 1.4 19-0.6 28.2-2.2 9.8-8.2 16.4-20.5 17.6-7.4 0.8-14.7 1.2-22 1.8-1.1-5.7-0.2-6.9 4.6-6.9 8.1-0.1 15.5-1.9 20.4-8.9 1.7-2.5 3-5.8 3.2-8.8 0.6-7.2 0.6-14.4 0.6-21.6 0-5.9-1.7-7.9-7-9.2-2.1-0.5-4.3-0.4-6.4-0.1-1 0.1-2.3 1.2-2.6 2-2.3 9.1-7.4 16.6-13.5 23.5-10.2 11.6-22.6 20.4-37 26.1-5.3 2.1-11.1 2.7-16.6 4.1-0.2-0.6-0.4-1.1-0.6-1.7 2.4-1.3 4.8-2.7 7.3-4 20-10.7 34.5-26.6 44.5-46.8 1.2-2.4 1.1-3.6-2-3.5-4.2 0.1-8.4-0.1-12.6 0.1-1.2 0.1-3 0.8-3.5 1.8-6.7 11.9-17 20.1-27.8 27.8-7.2 5.1-14.7 9.9-23.5 12-3.4 0.8-6.9 1-10.3 1.4-0.1 0-0.2-0.2-0.2-0.5zM658.7 512.1c5.2 0 9.7-0.1 14.3 0.1 0.7 0 1.7 0.9 1.9 1.6 2.2 7.5 4.6 15 6.4 22.6 1.3 5.7-0.8 14.8-6.4 16.9-3.1 1.1-6.4 2.1-9.6 2.1-27.3 0.2-54.5 0.2-81.8 0-6.4-0.1-13.5-1.1-15.8-8.5-1.2-3.9-1.3-8.6-0.4-12.6 1.9-8 4.9-15.7 7.5-23.5 1.9-5.6 3.9-11.1 5.9-16.7 1.7-4.6 1.1-5.8-3.8-5.8-3.5 0-7 0.1-10.4 0-5.1-0.1-7.1-2.1-7.4-7.6 0.6-0.1 1.1-0.2 1.7-0.2h116c5.8 0 7.3 1.5 7.8 7.5-1.3 0.1-2.5 0.3-3.8 0.3-26.5 0-53.1 0.1-79.6-0.1-3.3 0-4.6 1.6-5.4 4.2-3.3 10.1-6.4 20.3-9.7 30.4-1.2 3.8-2.8 7.6-4.1 11.3-2.6 7.2 1.4 13.1 9.2 13.1 22.5 0.1 44.9 0 67.4 0.1 7.2 0 10-3.5 8.1-10.5-2-7.4-4.3-14.8-6.5-22.1-0.3-0.8-0.8-1.3-1.5-2.6zM536.9 486.4c-28.2 0-55.9 0-83.6-0.1-3.1 0-6.3-0.3-9.1-1.4-4-1.6-5.7-5.6-5.8-9.5-0.4-12-0.1-24-0.1-36 0-0.2 0.2-0.4-0.1 0.1 3.4 0.5 6.5 1.3 9.6 1.3 22.9 0.2 45.8 0.1 68.8 0.4 4.5 0.1 9.1 1.2 13.6 2.3 4.7 1.1 6.5 5.3 6.7 9.2 0.3 11.2 0 22.3 0 33.7z m-49.1-19.5h-31.3c-1.1 0-2.6 0.2-3.2 0.9-1.8 2.3-0.2 8.2 2.6 9.4 1.9 0.8 4.1 1.3 6.2 1.3 17.3 0.1 34.6 0.1 51.9 0.1 8.7 0 8.6 0 8.2-8.5-0.1-2.5-0.9-3.3-3.4-3.2-10.4 0.1-20.7 0-31 0z m-0.5-7.9c10.4 0 20.9 0 31.3-0.1 1.1 0 2.6-0.3 3.1-1 2.3-3.2-0.3-8.4-4.4-8.5-20.6-0.1-41.2-0.1-61.9 0-0.9 0-2.1 1.4-2.5 2.4-0.4 0.9 0 2.1-0.1 3.2-0.3 2.9 0.8 4 3.9 3.9 10.2 0 20.4 0.1 30.6 0.1zM697.9 480.4h17.6c4.1 0 3.8 0.1 2.8-3.8-0.9-3.7-1-7.6-1.4-11.7h15.6v6.9c0.1 5.7 3 8.6 8.5 8.6h41c5.2 0 8.7-3.4 8.8-8.6v-7h15.6c-0.7 4.2-1.3 8.1-2.1 12-0.5 2.3-0.5 3.8 2.5 3.7 3.8-0.1 7.7 0 11.5 0 5.1 0.1 6.8 2.2 6 7.7H706.7c-6.8 0-7.5-0.6-8.8-7.8z"
              p-id="1320"
            ></path>
            <path
              d="M306.4 462.7c3.7 0 7.1 0.2 10.4-0.1 2.2-0.1 2.4 0.6 2.7 2.6 0.8 7.5 2 14.9 3.1 22.3 0.1 0.5 0.6 0.9 1.6 2.5 2.7-9.4 4.1-18.1 4.5-27.1h13.4c-0.7 3.4-1.1 6.8-2.2 10-3.4 9.8-7.5 19.4-10.6 29.2-0.9 2.8 0 6.7 1.4 9.4 2.8 5.6 6.7 10.6 9.6 16.1 1.4 2.6 1.4 6 1.5 9.2-7.5-6.3-13.2-13.7-17.9-22.6-6.2 8-12.1 15.7-18.1 23.4-0.4-0.2-0.9-0.5-1.3-0.7 0.2-3.1-0.6-6.2 1.4-9.4 4.3-6.7 8.2-13.5 12-20.5 0.6-1.1 0.5-3 0.1-4.3-2.3-7.1-5.1-14-7.3-21.1-1.7-5.4-2.9-11-4.3-16.5v-2.4zM383.3 537.4c-2.4-2.7-5.1-5.2-7.3-8.1-3.1-4.1-5.8-8.4-8.8-12.6-0.6-0.8-1.4-1.4-2.2-2.1-0.5 0.7-1.1 1.4-1.6 2.1-4.3 7.4-9.5 14.3-16.2 20.5-1.1-3.5-1.1-6.5 0.7-9.4 4-6.5 7.8-13.2 11.7-19.7 2.1-3.5-0.5-6.2-1.5-9.1-2.5-7.2-5.2-14.4-7.7-21.6-1.5-4.6-2.6-9.3-4.1-14.6 4.6 0 8.5-0.1 12.3 0.1 0.5 0 1.3 1.5 1.5 2.4 1.2 6.9 2.1 13.9 3.3 20.9 0.2 1 1.1 1.9 1.7 2.8 0.5-1 1.4-1.9 1.5-2.9 1.1-7.7 2.2-15.3 3.2-23.1h12.8c-3.1 13.8-6.3 27.2-12.3 39.8-1.6 3.3 0.8 5.8 2.1 8.3 2.7 5.2 5.7 10.3 9.2 15.1 2.6 3.2 3.1 6.7 1.7 11.2zM701.8 447.1c0.9-0.1 1.8-0.2 2.7-0.2 15 0 30-0.1 45 0.1 3.6 0 5.2-0.9 4.6-4.6-0.2-1.4 0-2.8 0-4.7 4.7 0 9.1-0.1 13.5 0.1 0.5 0 1.3 1.2 1.4 1.9 0.2 1.2 0.1 2.4 0 3.6-0.3 2.8 0.9 3.8 3.7 3.7 13.9-0.1 27.8-0.1 41.8-0.1 5.3 0 7.2 2.2 6.6 7.9H709c-5.7-0.3-6.8-1.5-7.2-7.7zM681.2 451h-3.1c-36.1 0-72.2 0-108.4 0.1-3.7 0-5.5-1.1-6.6-4.8-0.9-3.2 0.3-3.2 2.7-3.2H672.4c6.6 0.2 7 0.6 8.8 7.9zM836 550.5c2.1-4.7 4.7-9.2 6.4-14 2.8-8.4 5-16.9 7.5-25.4 0.3-0.9 0.9-2.5 1.4-2.5 4.7-0.2 9.4-0.1 14.4-0.1-4 18.7-11 34.4-28.5 42.9-0.5-0.3-0.9-0.6-1.2-0.9zM953.3 550.7c-11.1 0.4-29.2-26.2-28.9-42.4H939c2.8 14.6 6.5 29.2 14.3 42.4z"
              p-id="1321"
            ></path>
            <path
              d="M181.8 477.1c1.3 7.4 2.9 14.4 3.7 21.6 1.2 10.7-9.5 20.7-17.8 23.5-13.1 4.5-28.2-6.2-31.6-18.7-3.9-14.6 4.2-32.4 17.7-38.2 1.5-0.7 3-1.3 4.5-2 3.1-1.4 1.6-3.7 1.1-5.8-1.4-5.8-2.2-11.6 0.8-17 4.5-8.1 16.2-14.5 25.3-10.6 3.9 1.7 7.9 3.3 11.5 5.5 3.3 2 4.6 6.5 3.5 9.4-1.9 5-6.9 6.3-12.2 3.2-1.9-1.1-3.8-2.4-5.8-3.3-3.9-1.8-8.1 0.8-7.9 5.1 0.1 3.4 0.8 6.8 1.3 9.9 4.8 1.4 9.4 2.2 13.6 4 12.9 5.7 22.1 15 26.4 28.9 8 25.8-7 51.5-29.2 61.3-12.5 5.6-25.5 7.4-38.8 4.4-8.3-1.9-15.9-5.5-22.9-10.8-8.5-6.5-14.9-14.3-19.1-24-6-13.6-7.6-27.5-2.9-42.2 6.3-19.7 18.9-33.1 38.1-40.5 3.4-1.3 7.5 0.1 9.3 3.2 2.1 3.5 1.4 7.4-2 9.8-2.6 1.8-5.6 3-8.4 4.5-10.6 5.4-17.2 14.2-21.4 25.2-8.2 21.4 3.1 46.2 21.8 55.9 17.2 9 40.7 5.4 53.4-9.4 7.9-9.2 10.2-20.1 7.8-31.5-2-9.4-8.4-16.1-16.9-20.7-0.4-0.2-0.9-0.3-1.4-0.4-0.7-0.3-1.3-0.3-1.5-0.3z m-16.3 0c-12.6 2.9-18.3 15.7-12.8 26 1.9 3.6 6.6 5.6 10 4.6 4.7-1.4 8-4.8 7.3-9.2-1.1-7.2-3-14.3-4.5-21.4z"
              fill="#FFFFFF"
              p-id="1322"
            ></path>
            <path
              d="M165.5 477.1c1.5 7.1 3.4 14.2 4.5 21.4 0.7 4.4-2.6 7.8-7.3 9.2-3.4 1-8.1-1-10-4.6-5.5-10.4 0.1-23.2 12.8-26z"
              fill="#E00000"
              p-id="1323"
            ></path>
          </svg>
        </div>
        <div class="openapp">打开APP，发现更多好音乐 ></div>
        <p>网易公司版权所有©1997-2020 杭州乐读科技有限公司运营</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 创建推荐歌单空数组
      Playlist: [],
      // 创建最新歌单空数组
      Newlist: [],
    };
  },
  mounted() {
    this.getList(); //获取推荐歌单
    this.getNewList(); //获取最新歌单
  },
  methods: {
    //   获取推荐歌单数据
    getList() {
      this.$http.get("/personalized?limit=6").then((res) => {
        // console.log(res);
        if (res.status == 200) {
          this.Playlist = res.data;
          // console.log(this.Playlist);
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    // 获取最新歌单
    getNewList() {
      this.$http.get("/personalized/newsong").then((res) => {
        // console.log(res, "最新");
        if (res.status == 200) {
          this.Newlist = res.data;
          // console.log(this.Newlist);
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    // 跳转歌单页面
    toPlaylist(id) {
      let obj = {
        path: "/playlist",
        query: {
          id,
        },
      };
      this.$router.push(obj);
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

<style lang="less"  scoped>
.Playlist {
  // margin-top: 125px;
  overflow: hidden;
  h2 {
    font-size: 17px;
    height: 54px;
    line-height: 54px;
    padding-left: 9px;
    position: relative;
    font-weight: normal;
    color: rgb(51, 51, 51);
    &::before {
      content: "";
      display: block;
      width: 2px;
      height: 16px;
      background-color: #d33a31;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    //   display: inline-block;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: calc(100% / 3);
      // float: left;

      padding-right: 2px;
      margin-bottom: 16px;
      a {
        display: block;
        color: #333;
        .playimg {
          position: relative;
          img {
            width: 100%;
            display: block;
          }
          span {
            position: absolute;
            right: 5px;
            top: 2px;
            color: #fff;
            font-size: 12px;
            background-position: 0;
            background-repeat: no-repeat;
            background-size: 11px 10px;
            padding-left: 13px;
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+");
          }
        }
        p {
          padding: 6px 2px 0 6px;
          font-size: 13px;
          line-height: 1.2;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
}
.newmusic {
  position: relative;
  h2 {
    font-size: 17px;
    height: 54px;
    line-height: 54px;
    padding-left: 9px;
    position: relative;
    font-weight: normal;
    color: rgb(51, 51, 51);
    &::after {
      content: "";
      display: block;
      width: 2px;
      height: 16px;
      background-color: #d33a31;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    //   display: inline-block;
  }
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
          color: #333;
        }
        span {
          font-size: 12px;
          color: #888;
          display: block;
          float: left;
          margin-right: 5px;
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
.footer {
  padding-top: 53%;
  // height: 500px;
  background-image: url("https://s3.music.126.net/mobile-new/img/recommand_bg_2x.png?d045fafc60e017b653f8065a87496922=");
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .footercon {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    text-align: center;
  }
  .logo {
    width: 100%;
    padding-top: 5%;
  }
  .openapp {
    border: 1px solid #d33a31;
    font-size: 16px;
    line-height: 38px;
    border-radius: 38px;
    margin: -93px auto 5px;
    color: #d33a31;
    width: 90%;
    text-align: center;
  }
  p {
    color: #888;
    font-size: 12px;
    line-height: 16px;
  }
}
</style>