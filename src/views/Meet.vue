<template>
  <div class="meet">
    <h2>邂逅</h2>
    <div class="modeCont"></div>
    <div id="app">
        <div data-v-48d1340b="" class="contTop xh_contTop">
            <div data-v-48d1340b="" id="xh_cover_top" class="cover_top">
                <span data-v-48d1340b="" class="logo"></span>
                <div data-v-48d1340b="" class="detail">
                    <h3 data-v-48d1340b="">百合APP</h3>
                    <span data-v-48d1340b="">视频直播 在线相亲</span>
                </div>
                <a data-v-48d1340b="" href="https://itunes.apple.com/us/app/bai-he-wang-zui-kao-pu-dan/id500975133?l=zh&amp;ls=1&amp;mt=8" id="openBtn" target="_blank" class="openBtn">打开</a>
            </div>
        </div>
        <div class="xhLove">
            <div class="lick" @click="no()" ></div>
            <div class="lick" @click="yes()"></div>
        </div>

        <div class="xhphotoBox"  v-for='data in looplist' @click="going(data.userID)">
            <router-link to="/meet/information" tag="a" class="goToProfileA">
                <img :src="data.headPhotoUrl_120_150" style=" width: 245px; height: 245px; ">
            </router-link>
            <p>
               <router-link to="/meet/information" tag="a" class="goToProfileA">{{data.nickname}}</router-link>
                <img src="//static5.baihe.com/images/newH5/userIcon2.png" width="17" height="17">
            </p>
            <router-link to="/meet/information" tag="a" class="goToProfileA">
                <span>{{data.age}}岁</span>
                <span>{{data.height}}cm</span>
                <span>{{data.educationChn}}</span>
                <span>{{data.incomeChn}}</span>
            </router-link>
        </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped type="text/css">
*{ padding: 0; margin: 0; }
a{ text-decoration: none; }
    h2{
      margin-bottom: 50px;
    }
    .meet{
        width: 100%;
        height: 100%;
        position: absolute;
        margin: 0px;
        padding: 0px;
        background: rgb(238, 238, 238);
        display: block;
    }
    .modeCont{
        position: relative;
        width:290px;
        height: 365px;
        margin: 0 auto;
        text-align: center;
        background: url(http://static5.baihe.com/images/newH5/photoBg.gif) no-repeat;
        background-size: 100% auto;
        overflow: hidden;
    }
    .xhLove{
         padding: 0 0 48px;
        text-align: center;
    }

    .xhLove .lick {
        display: inline-block;
        width: 53px;
        height: 53px;
        margin: 0 25px;
        text-indent: -999em;
        background: url(http://static5.baihe.com/images/newH5/aPic.png) no-repeat;
        background-size: 100% auto;
        outline: none;
    }
    .xhLove div:nth-child(1) {
        background-position: 0 -53px;
    }

    .xhLove div:nth-child(2) {
        background-position: 0 0;
    }
    .xhphotoBox {
        position: absolute;
        top: 100px;
        left: 50%;
        width: 268px;
        height: 327px;
        padding: 6px 0 0;
        background: #fff;
        border: 1px solid #f3f3f4;
        transform: translate(-50%);
    }

    .xhphotoBox .aPhoto em {
        display: none;
        position: absolute;
        bottom: 10px;
        left: 90px;
        width: 120px;
        height: 104px;
        text-indent: -999em;
        background-size: 100% auto;
    }
    .xhphotoBox p {
        padding: 10px 0 0;
    }
    .xhphotoBox p img {
        position: relative;
        top: 2px;
        padding: 0 0 0 6px;
    }
    .xhphotoBox span {
        padding: 0 6px;
        color: #666;
        font: 15px/26px microsoft yahei;
    }
    .xhphotoBo a img{
        width: 225px;
        height: 225px;
    }
    .contTop[data-v-48d1340b] {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 99;
    }
    .cover_top[data-v-48d1340b] {
      height: 44px;
      padding: 0;
      background: #fff;
      overflow: hidden;
    }
    .cover_top .logo[data-v-48d1340b] {
      float: left;
      display: block;
      width: 76px;
      height: 44px;
      margin: 0;
      background: url(http://static5.baihe.com/images/newH5/con_top_logo.png) no-repeat;
      background-size: 100% auto;
    }
    .cover_top .detail[data-v-48d1340b] {
      float: left;
      width: 160px;
      margin-top: 4px;
    }
    .cover_top .detail span[data-v-48d1340b] {
      display: block;
      font: 12px/12px "Microsoft YaHei";
      color: #af947c;
    }
    .cover_top .openBtn[data-v-48d1340b] {
      float: right;
      display: block;
      width: 60px;
      height: 26px;
      margin: 9px 16px 0 0;
      font: 14px/26px "Microsoft YaHei";
      color: #fff;
      text-decoration: none;
      text-align: center;
      background-image: linear-gradient(126deg, rgba(254,176,39,.97), #ff8445);
      border-radius: 4px;
    }
</style>

<script>
import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'
export default {
  data () {
    return {
      looplist: []
    }
  },
  created () {
    this.$store.commit('changeMainPanelFooterBar', true);
    if(!this.$store.state.userData.isLogin){
      Toast(`登录状态过期，请重新登录`)
      setTimeout(()=>{this.$router.push('/')},1000);
    }
  },
  mounted () {
    if (this.$store.state.meetInfo.looplist.length !== 0) {
      this.looplist = this.$store.state.meetInfo.looplist
    } else {
      axios({
        url: '/yuenimei/data/getmembership/f',
        params: {
          page: Math.floor(Math.random() * 100),
          limit: 100
        }
      }).then(result => {
        this.$store.commit('setMeetInfoLoopList', result.data.data)
        this.looplist = result.data.data
      })
    }
  },

  methods: {
    no () {
      this.looplist.pop()
      this.$store.commit('setMeetInfoLoopList', this.looplist)
    },
    yes () {
      this.looplist.pop()
      this.$store.commit('setMeetInfoLoopList', this.looplist)
    },
    going (id) {
      this.$router.push(`/xqym/${id}`)
    }
  }
}

</script>
