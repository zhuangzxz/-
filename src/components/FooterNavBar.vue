<template>
  <div class="footerbar-nav">
    <div id="footer">
      <div id="comFooter" style="display: block;" v-if="$store.state.mainPanel.isFooterBarShow">
        <ul class="navBott">
          <li>
            <router-link tag="a" to="/meet" activeClass="active" style="height: 50px;">邂逅</router-link>
          </li>
          <li>
            <router-link tag="a" to="/search" class="footerbar-link search" activeClass="active">搜索</router-link>
          </li>
          <li>
            <router-link tag="a" to="/message" class="footerbar-link message" activeClass="active">
              <span id="unReadCount" class="num" style="display: inline;">16</span>
              消息
            </router-link>
          </li>
          <li>
           <router-link tag="a" to="/vip" class="footerbar-link vip" activeClass="active">VIP</router-link>
          </li>
          <li>
           <router-link tag="a" to="/myinfo" class="footerbar-link title" activeClass="active">
              我的
            </router-link>
          </li>
        </ul>
        <div style="position:absolute; bottom:50px; left:0; width:100%; height:auto; z-index:3; background:#fff;" id="adBannerDiv">
          <a href="javascript:;" style="display: none;" id="adBannerA">
            <img src="http://static6.baihe.com/client/banner_gn.png" width="100%" border="0">
          </a>
          <a href="javascript:;" style="display: none;" id="adBannerDownLoad">
            <img src="http://static6.baihe.com/client/banner_20160530.jpg" width="100%" border="0">
          </a>
          <a href="javascript:;" style="display: none; position: absolute; top: 3px; right: 2px; padding: 5px;" id="closeAdBanner">
            <img src="http://static5.baihe.com/images/newH5/icon_close.png" width="100%" border="0">
          </a>
        </div>
        <div class="downNo" id="downNo" style="display:none;">

        </div>
      </div>
    </div>
  </div>
</template>

<style type="text/css" lang="scss">
  .navBott {
    width:100%;
    position:fixed;
    bottom:0;
    border-top: 1px solid #e7e7e9;
    background: #fff;
    filter: alpha(opacity=90);
    opacity: 0.9;
    overflow: hidden;
    li {
      float: left;
      width: 20%;
      height: 42px;
      padding: 6px 0 0;
      border-top: 1px solid #f8f8f8;
      .num {
        display: none;
        top: -4px;
        left: 57%;
      }
      a {
        display: block;
        position: relative;
        width: 100%;
        height: 20px;
        padding: 22px 0 0;
        color: #8f8c88;
        font-size: 12px;
        font-family: microsoft yahei;
        text-align: center;
        text-decoration: none;

      }
      a.active {
          color: #ff5e00;
        }
      a:before {
        position: absolute;
        width: 28px;
        height: 22px;
        left: 50%;
        top: 0;
        margin: 0 0 0 -14px;
        content: "";
        background: url(http://static5.baihe.com/images/newH5/navBottBg.png) no-repeat center top;
        background-size: 100% auto;
      }
    }

    li:nth-child(1) a.active:before {
      background-position: 0 -110px;
    }
    li:nth-child(1) a:before {
      background-position: 0 0;
    }

    li:nth-child(2) a.active:before {
      background-position: 0 -132px;
    }
    li:nth-child(2) a:before {
      background-position: 0 -22px;
    }

    li:nth-child(3) a.active:before {
     background-position: 0 -264px;
    }
    li:nth-child(3) a:before {
      background-position: 0 -44px;
    }

    li:nth-child(4) a.active:before {
      background-position: 0 -241px;
    }
    li:nth-child(4) a:before {
      background-position: 0 -219px;
    }

    li:nth-child(5) a:before {
      background-position: 0 -88px;
    }
    li:nth-child(5) a.active:before {
      background-position: 0 -198px;
    }
  }

  .msgList ul li .num, .navBott li .num {
    position: absolute;
    top: 4px;
    left: 38px;
    padding: 0 4px;
    height: 15px;
    font: 12px/14px microsoft yahei;
    color: #fafafa;
    text-align: center;
    border-radius: 49px;
    background: #f74c31;
  }

</style>

<script type="text/javascript">
import { Tabbar, TabItem } from 'mint-ui'
import Vue from 'vue'

import 'mint-ui/lib/style.css'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

export default {

}
</script>
