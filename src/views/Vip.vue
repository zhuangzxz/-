<template>
  <div class="vip">
    <div id="header" style="display: block;">
      <div class="orgBg" id="comHeader">
        <a id="comHeaderGB" href="javascript:;" class="fl"></a>
        <span id="comHeadSStr">百合服务</span>
      </div>
    </div>

    <div class="vip-content">
      <div class="myAccount" id="payService" style="display: block;">
        <div class="myAccount myAccount4 bg">
          <p class="seviceTit seviceTitOrg2 bg">———— 推荐购买 ————</p>
          <div class="top">
            <a href="javascript:;" id="activityA">
              <img src="http://static6.baihe.com/client/payservice_H5_tdgl2019.png" width="100%">
            </a>
          </div>
          <p class="seviceTit seviceTitOrg2 bg">———— 可购买的服务 ————</p>
          <ul style="padding-bottom:20px;">
            <li class="gaoji">
              <div class="fl">
                <em>高级会员</em>
                <br>免费沟通，尊贵标识，昵称红色展示
              </div>
              <a href="javascript:;" class="goToPayAdv">去开通</a>
            </li>
            <li class="shuijing">
              <div class="fl"><em>水晶会员</em>
                <br>尽享全站超多特权，爱情尽在掌握
              </div>
              <a href="javascript:;" class="goToPayCy">去开通</a>
            </li>
            <li class="lovePull">
              <div class="fl">
                <em>红娘牵线</em>
                <br>提供要求，红娘全程牵线
              </div>
              <a href="javascript:;" class="goToPayHnqx">去开通</a>
            </li>
            <li class="card">
              <div class="fl">
                <em>百合产品卡开通</em>
                <br>一卡在手，极速开通
              </div>
              <a href="javascript:;" class="goToCard">去开通</a>
            </li>
            <li class="hongNiang">
              <div class="fl">
                <em>红娘服务</em>
                <br>人工红娘一对一服务
              </div>
              <a href="javascript:;" id="hongniangSpm">去体验</a>
            </li>
          </ul>
          <p class="seviceTit seviceTitGray bg" id="myAccountUl2" style="display: none;">———— 已购买的服务 ————</p>

          <p class="textBottom" id="goToWeb">
            <a href="javascript:;">登录百合电脑版体验更多服务</a>
          </p>
          <br><br>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped type="text/css">
  .vip{
    text-align: left;
  }
  #header {
    width: 100%;
    text-align: center;
    font: 18px/42px microsoft yahei;
    overflow: hidden;
  }
  #header .orgBg {
    height: 42px;
    background: #ff6400;
    overflow: hidden;
  }
  #header .fl {
    float: left;
    width: 12px;
    height: 21px;
    margin: 12px 0 0 15px;
    text-indent: -999em;
  }
  #header .orgBg span {
    display: block;
    margin: 0 100px;
    color: #fff;
  }
  .myAccount {
    margin: 0 0 36px;
  }
  .bg {
    background: #fff;
  }
  .seviceTitOrg2 {
    color: #ff6400!important;
    text-align: center;
  }
  .seviceTit {
    padding: 5px 15px 0;
    height: 34px;
    font: 15px/34px microsoft yahei;
    color: #999;
  }
  .myAccount4 .top {
    position: relative;
  }
  .myAccount4 ul {
    border: none;
  }
  .myAccount ul {
    padding: 0 0 0 15px;
    background: #fff;
    overflow: hidden;
  }
  .myAccount3 ul li, .myAccount4 ul li {
    padding: 7px 12px 7px 0;
  }
  .myAccount ul li {
    padding: 9px 10px 9px 0;
    border-bottom: 1px solid #e6e6e8;
    clear: both;
    overflow: hidden;
  }
  .myAccount ul li .fl, .memberCont .cardDetail .fl {
    position: relative;
    float: left;
    padding: 0 0 0 50px;
    color: #999;
    font: 12px/20px microsoft yahei;
  }
  .myAccount ul li.gaoji .fl:before {
    background-position: 0 -180px;
  }
  .myAccount ul li.shuijing .fl:before {
    background-position: 0 -135px;
  }
  .myAccount ul li.lovePull .fl:before {
    background-position: 0 -270px;
  }
  .myAccount ul li.card .fl:before {
    background-position: 0 -697px;
  }
  .myAccount ul li.hongNiang .fl:before {
    background-position: 0 -315px;
  }
  .myAccount ul li .fl:before, .memberCont .cardDetail li .fl:before {
    position: absolute;
    width: 45px;
    height: 45px;
    left: 0;
    top: 0;
    content: "";
    background: url(http://static5.baihe.com/images/newH5/myAccount.png) no-repeat;
    background-size: 100% auto;
  }
  .myAccount3 ul li .fl em, .myAccount4 ul li .fl em {
    color: #ff6400;
    font: 15px/26px microsoft yahei;
    vertical-align: middle;
  }
  .myAccount ul li a {
    display: block;
    float: right;
    width: 65px;
    height: 30px;
    margin: 7px 0 0;
    font: 400 16px/30px microsoft yahei;
    color: #ff6400;
    text-align: center;
    border: 1px solid #ff6400;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
  }
  .seviceTitGray {
    color: #999;
    text-align: center;
  }
  .myAccount .textBottom {
    text-align: center;
  }
  .myAccount .textBottom a {
    font: 14px/30px microsoft yahei;
    color: #f00;
    text-align: center;
  }
  .seviceTit[data-v-533ef15a] {
    padding: 5px 15px 0;
    height: 34px;
    font: 15px/34px microsoft yahei;
    color: #999;
  }
</style>

<script type="text/javascript">
export default {

}
</script>
