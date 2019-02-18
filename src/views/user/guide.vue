<template>
  <div class="guide">
    <div class="loading">
      <div id="loadingDiv" class="loading" v-if="isLoading">
        <div class="graph">
          <div id="barBox" :style="{width:scale+'%'}"></div>
        </div>
        <strong id="bar" style="display: block; width: 96%; margin-top: 8px; text-align: right; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 18px; line-height: 24px; font-family: &quot;microsoft yahei&quot;;">{{scale}}%</strong>
      </div>
    </div>
    <div class="guide_class" id="guide" v-if="!isLoading">
      <div class="downloadJump bg" style="height: 667px">
        <div class="logo">
          <img src="http://static5.baihe.com/images/newH5/dj_logo.png"></div>
          <div class="bottom">
            <div class="login">
              <a href="https://itunes.apple.com/us/app/bai-he-wang-zui-kao-pu-dan/id500975133?l=zh&amp;ls=1&amp;mt=8" class="orgBtn" id="openBtn" target="_blank">立即下载</a>
              <a :href="$store.state.userData.isLogin?'#/meet':'#/userloginandregister'" class="whiteBtn" id="go_index">继续访问</a>
            </div>
            <img src="http://static5.baihe.com/images/newH5/dj_footer.jpg" width="100%">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped type="text/css">
  .bg {
    background: #fff;
  }
  .downloadJump .logo {
    padding-top: 26%;
  }
  .downloadJump .logo img {
    width: 42%;
  }
  .downloadJump img {
    display: block;
    margin: 0 auto;
  }
  .downloadJump .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .downloadJump .login {
    padding: 0 40px 34px;
  }
  .downloadJump .login .orgBtn {
    color: #fff;
    background-image: linear-gradient(108deg, rgba(254, 176, 39, 0.97), #ff8445);
  }

  .downloadJump .login a {
    display: block;
    height: 48px;
    margin: 20px 0 0;
    font: 16px/48px "Microsoft YaHei";
    text-decoration: none;
    text-align: center;
    border-radius: 100px;
  }

  .orgBtn {
    background: #ff6400;
  }

  .orgBtn, .orgBtn1, .orgBtn3 {
    display: block;
    height: 42px;
    margin: 20px 15px 0;
    font: 18px/42px microsoft yahei;
    text-align: center;
    color: #fff;
    text-decoration: none;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    overflow: hidden;
  }
  .downloadJump .login .whiteBtn {
    height: 46px;
    color: #ec6c1f;
    background: #fff;
    border: 1px solid #fc6e27;
  }

  .downloadJump .login a {
    display: block;
    height: 48px;
    margin: 20px 0 0;
    font: 16px/48px "Microsoft YaHei";
    text-decoration: none;
    text-align: center;
    border-radius: 100px;
  }

  .whiteBtn {
    color: #ff5e00;
    background: #fff;
  }
  .downloadJump img {
    display: block;
    margin: 0 auto;
  }

  .loading {
    text-align: center;
    position: absolute;
    width: 80%;
    height: 60px;
    margin: -30px 0 0 -40%;
    top: 50%;
    left: 50%;
  }
  .graph {
    text-align: center;
    height: 20px;
    border: 2px solid #ff6400;
    padding: 2px;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
  }
  #barBox {
    text-align: center;
    display: block;
    height: 100%;
    background: url(//static5.baihe.com/images/newH5/barBg.jpg) repeat-x right top;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }
</style>

<script type="text/javascript">
  import axios from 'axios'
  export default {
    data () {
      return {
        scale: 5,
        isLoading: true,
        intervalId: 0
      }
    },
    mounted () {
      var self = this
      this.intervalId = setInterval(function () {
        if (self.scale > 95) {
          clearInterval(self.intervalId)
          self.isLoading = false
          return
        }
        self.scale += 1
      }, 20)
      axios({
        url: 'data/f/getmembership',
        params: {
          page: Math.floor(Math.random() * 100),
          limit: 100
        }
      }).then(result => {
        this.$store.commit('setMeetInfoLoopList', result.data.data)
      })

      axios.get('/data/weather').then(result => {
        console.log('weatherData',result.data.data)
        this.$store.commit('setPublicWeatherData', result.data.data)
      })

      this.$store.commit('changeMainPanelFooterBar', false)
    },
    destroyed () {
      this.$store.commit('changeMainPanelFooterBar', true)
    }
  }
</script>
