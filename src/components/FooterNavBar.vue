<template>
  <div class="footerbar-nav">
    <!-- <mt-tabbar>
      <div id="tab1" class="footerbar-tab">
        <router-link tag="a" to="/meet" class="footerbar-link meet" activeClass="active" exact  style="height: 50px;">
          <p class="title">邂逅</p>
        </router-link>
      </div>
      <div id="tab2" class="footerbar-tab">
        <router-link tag="a" to="/search" class="footerbar-link search" activeClass="active" exact>
          <p class="title">搜索</p>
        </router-link>
      </div>
      <div id="tab3" class="footerbar-tab">
        <router-link tag="a" to="/message" class="footerbar-link message" activeClass="active" exact>
          <p class="title">消息</p>
        </router-link>
      </div>
      <div id="tab4" class="footerbar-tab">
        <router-link tag="a" to="/vip" class="footerbar-link vip" activeClass="active" exact>
          <p class="title">VIP</p>
        </router-link>
      </div>
      <div id="tab5" class="footerbar-tab">
        <router-link tag="a" to="/myinfo" class="footerbar-link title" activeClass="active" exact>
          <p class="title">我的</p>
        </router-link>
      </div>
    </mt-tabbar> -->
    <div id="footer">
      <div id="comFooter" style="display: block;">
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
  // .footerbar-nav{
  //   height:33px!important;
  //   position: fixed;
  //   bottom: 0;
  //   width: 100%;
  //   z-index: 2;
  //   background-color: #f60;
  //   .footerbar-tab{
  //     padding-top:7px;
  //     display:flex;
  //     flex:1;
  //     background-color: #ff0;
  //     .active{
  //       .title{
  //         color:#ff5e00;
  //       }
  //     }
  //     .footerbar-link{
  //       position: relative;
  //       display: block;
  //       padding-top: 22px;
  //       margin: 0 0 0 -14px;
  //       text-align: center;
  //       width: 100%;
  //       .title{
  //         height:20px;
  //         line-height: 20px;
  //         font-size: 12px;
  //         text-align: center;
  //         padding-left: 26px;
  //       }
  //     }
  //   }
  // }
  // .footerbar-link::before{
  //   content:"";
  //   width: 28px;
  //   height: 22px;
  //   position: absolute;
  //   top:0;
  //   left: 50%;
  //   background: url("../../public/vender/images/navBottBg.png") no-repeat center top;
  //   background-size: 100% auto;
  // }
  // .footerbar-tab:nth-child(1) .footerbar-link.active::before{
  //   background-position: 0 -110px;
  // }
  // .footerbar-tab:nth-child(2) .footerbar-link::before{
  //   background-position: 0 -22px;
  // }
  // .footerbar-tab:nth-child(2) .footerbar-link.active::before{
  //   background-position: 0 -132px;
  // }
  // .footerbar-tab:nth-child(3) .footerbar-link::before{
  //   background-position: 0 -44px;
  // }
  // .footerbar-tab:nth-child(3) .footerbar-link.active::before{
  //   background-position: 0 -264px;
  // }
  // .footerbar-tab:nth-child(4) .footerbar-link::before{
  //   background-position: 0 -219px;
  // }
  // .footerbar-tab:nth-child(4) .footerbar-link.active::before{
  //   background-position: 0 -241px;
  // }
  // .footerbar-tab:nth-child(5) .footerbar-link::before{
  //   background-position: 0 -88px;
  // }
  // .footerbar-tab:nth-child(5) .footerbar-link.active::before{
  //   background-position: 0 -198px;
  // }
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

    .navBott li:nth-child(1) a.active:before {
      background-position: 0 -110px;
    }
    .navBott li:nth-child(1) a:before {
      background-position: 0 0;
    }

    .navBott li:nth-child(2) a.active:before {
      background-position: 0 -132px;
    }
    .navBott li:nth-child(2) a:before {
      background-position: 0 -22px;
    }

    .navBott li:nth-child(3) a.active:before {
     background-position: 0 -264px;
    }
    .navBott li:nth-child(3) a:before {
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
  import { Tabbar, TabItem } from 'mint-ui';
  import Vue from 'vue'

  import 'mint-ui/lib/style.css';
 
  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);

  export default{

  }
</script>