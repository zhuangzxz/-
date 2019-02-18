<template>
    <div class="loginangregister">
      <div class="loginNewH5" id="loginNewH5">
        <div class="contTop xh_contTop">
          <div class="cover_top" id="xh_cover_top">
            <span class="logo"></span>
            <div class="detail">
              <h3>百合APP</h3>
              <span>视频直播 在线相亲</span>
            </div>
            <a href="https://itunes.apple.com/us/app/bai-he-wang-zui-kao-pu-dan/id500975133?l=zh&amp;ls=1&amp;mt=8" class="openBtn" id="openBtn" target="_blank">打开</a>
          </div>
        </div>
        <div class="indexN">
          <img src="http://static5.baihe.com/images/newH5/index_pic2.jpg">
          <div class="contC">
            <ul class="tab_login">
              <li>
                <a href="javascript:;" @click="isSelect=true" id="tab_item_reg" :class="isSelect?'active':''"><span>注册</span></a>
              </li>
              <li>
                <a href="javascript:;" @click="isSelect=false" id="tab_item_log" :class="!isSelect?'active':''"><span>登录</span></a>
              </li>
            </ul>

            <!-- 注册页面 -->
            <div id="con_reg" v-if="isSelect">
              <ul class="loginListN">
                <li class="mobile">
                  <input name="vRegTxtAcc" id="vRegTxtAcc" type="tel" placeholder="请输入手机号码" maxlength="11" autofocus="autofocus" v-model="regTel">
                  <a id="clearUName" class="del"></a>
                </li>
                <li class="code">
                  <input name="mobileCode" id="mobileCode" type="tel" placeholder="请输入验证码" maxlength="4">
                  <a href="javascript:;" id="vMobileAuSendCodeDo" class="grayBtn">获取验证码</a>
                </li>
                <li class="pwd">
                  <em id="pwdHtml">
                    <input name="vRegTxtPwd" id="vRegTxtPwd" type="password" placeholder="请输入6-16位字母/数字密码" maxlength="16" v-model="regPassword">
                  </em>
                  <em class="icon">
                    <a id="clearPwd" class="del"></a><a id="showPwd" class="eye"></a>
                  </em>
                </li>
              </ul>

              <!-- 验证码 -->
              <div id="vRegVerifyCodeView" class="codeBox" style="display: none;">
                <img id="vRegVerifyCode" class="js_cord" src="//static5.baihe.com/images/newH5/codeImg.png" width="80" height="40" alt="验证码">
                <input id="vRegCaptcha" class="js_input_cord" name="" type="text" data-role="none" placeholder="请输入左图的验证码">
              </div>
              <a href="javascript:;" @click='onHandelRegister' :class="isRegisterDataOk?'gradientIcon':'grayIcon'" style="margin:30px auto" id="reg_sub">注册</a>
              <p class="conText">
                注册即表示同意百合网
                <a href="javascript:;" id="vRegShowPro" class="aTxt">注册服务条款</a>
              </p>
              <div class="bhjyInfoArea">
                <p>百合佳缘网络集团股份有限公司 </p>
                <p>010-50863711 京ICP备10009806号-1</p>
              </div>
            </div>

            <!-- 登录页面 -->
            <div id="con_log" v-if="!isSelect">
              <ul class="loginListN">
                <li class="mobile">
                  <input name="vLoginTxtAcc" id="vLoginTxtAcc" type="text" placeholder="请输入手机号码或邮箱" autofocus="autofocus" v-model="loginTel">
                  <a id="clearUName1" class="del delC"></a>
                </li>
                <li class="pwd">
                  <span id="pwdHtml1">
                    <input name="vLoginTxtPwd" id="vLoginTxtPwd" type="password" placeholder="请输入密码" maxlength="20" v-model="loginPassword">
                  </span>
                  <a id="clearPwd1" class="del"></a>
                </li>
              </ul>
              <div id="vLoginVerifyCodeView" class="codeBox" style="display:none;">
                <img id="vLoginVerifyCode" class="js_cord" src="http://static5.baihe.com/images/newH5/codeImg.png" width="80" height="40" alt="验证码">
                <input id="vLoginCaptcha" class="js_input_cord" name="" type="text" placeholder="请输入左图的验证码">
              </div>
              <div class="pwdBox">
                <a href="javascript:;" id="vFindPwd" class="fr">忘记密码？</a>
                <a href="javascript:;" id="vloginRemPwd" class="fl remindA">
                  <em id="vloginRemPwdShow" class="active"></em>
                  记住密码
                </a>
              </div>
              <a href="javascript:;" id="vLoginDoLogin" :class="isLoginDataOk?'gradientIcon':'grayBtn2'" @click="onHandelLogin">登录</a>
              <input type="hidden" name="returnUrl" id="returnUrl" value="">
            </div>
          </div>
        </div>
        <div id="regTipError" class="popMask" style="display:none;">
          <div class="pop_unwrap">
            <p><strong>该手机号已注册</strong><br>请重新输入或直接登录 </p>
            <div class="btn">
              <a id="vMobileUNbindCancel" href="javascript:;">取消</a>
              <a id="vMobileUNbindOK" href="javascript:;">去登录</a>
            </div>
          </div>
        </div>
        <div id="pop_gtc" class="popMask" style="display: none;">
          <div class="new_interdict_layer">
            <div class="new_interdict_top"></div>
            <div class="new_interdict_p1">
              <div class="new_interdict_diamond">
                <span class="new_interdict_promotion"></span>
              </div>
              <a class="new_interdict_btn" id="gmhz_12">购买豪钻12个月</a>
            </div>
            <div class="new_interdict_p2">
              <div class="new_interdict_approve"></div>
              <a class="new_interdict_btn" id="go_smrz">实名认证</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/javascript">
import axios from 'axios'
import { Picker, Popup, Toast } from 'vant'
export default {
  data () {
    return {
      isRegister: true,
      isSelect: true,
      isLoginDataOk: true,
      isRegisterDataOk: true,
      regTel: '',
      regPassword: '',
      loginTel:'',
      loginPassword:''
    }
  },
  mounted () {
    this.$store.commit('changeMainPanelFooterBar', false)
    this.$store.commit('changeMyInfoHeadBarShowBack', false)
  },
  methods: {
    onHandelLogin () {
      console.log('收到登录点击事件')
      axios({
        url: '/data/user/login',
        method: 'post',
        data: {
          tel: this.loginTel,
          password: this.loginPassword
        }
      }).then(result => {
        console.log(result.data)
        if(result.data.ok){
          this.$store.commit('setUserDataIsLogin', true)
          this.$router.push('/meet')
        }
        Toast(`${result.data.msg}`)
      }).catch(err => {
        console.log(err)
      })
    },
    onHandelRegister () {
      axios({
        url: '/data/user/register',
        method: 'post',
        data: {
          tel: this.regTel,
          password: this.regPassword
        }
      }).then(result => {
        console.log(result.data)
        if(result.data.ok){
          this.isSelect=false;
        }
        Toast(`${result.data.msg}`)
      }).catch(err => {
        console.log(err)
      })

    }
  }
}
</script>

<style scoped type="text/css">
  .loginNewH5 {
    height: 100%;
    overflow: hidden;
    text-align: left!important;
  }
  .contTop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
  }
  .cover_top {
    height: 44px;
    padding: 0;
    background: #fff;
    overflow: hidden;
  }
  .cover_top .logo {
    float: left;
    display: block;
    width: 76px;
    height: 44px;
    margin: 0;
    background: url(http://static5.baihe.com/images/newH5/con_top_logo.png) no-repeat;
    background-size: 100% auto;
  }
  .cover_top .detail {
    float: left;
    width: 160px;
    margin-top: 4px;
  }
  .cover_top .detail h3 {
    font: 15px/21px "Microsoft YaHei";
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -ms-background-clip: text;
    -o-background-clip: text;
    -khtml-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    -ms-text-fill-color: transparent;
    -o-text-fill-color: transparent;
    -khtml-text-fill-color: transparent;
    text-fill-color: transparent;
    background-image: linear-gradient(to left, #ffa23b, #ff406e);
    text-shadow: 0 0 3px rgba(255,255,255,.5);
  }
  .cover_top .detail span {
    display: block;
    font: 12px/12px "Microsoft YaHei";
    color: #af947c;
  }
  .cover_top .openBtn {
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

  .loginNewH5 .indexN {
    position: relative;
    overflow: hidden;
    top: 44px;
  }
  .loginNewH5 .indexN img {
    display: block;
    width: 100%;
  }
  .loginNewH5 .indexN .contC {
    position: relative;
    margin-top: -19%;
  }
  .loginNewH5 .indexN .contC .tab_login {
    margin: 0 20px;
    overflow: hidden;
  }
  .loginNewH5 .indexN .contC .tab_login li {
    float: left;
    width: 50%;
    text-align: center;
  }
  .loginNewH5 .indexN .contC .tab_login li a.active {
    color: #f97729;
  }
  .loginNewH5 .indexN .contC .tab_login li a {
    display: block;
    width: 100%;
    font: 15px/15px "Microsoft YaHei";
    color: #3e3e3e;
    text-align: center;
  }
  .loginNewH5 .indexN .contC .tab_login li a.active span {
    border-bottom: 1px solid #f97729;
  }
  .loginNewH5 .indexN .contC .tab_login li a span {
    display: inline-block;
    padding: 0 25px 7px;
  }
  .loginNewH5 .loginListN {
    margin: 0 30px;
    padding: 15px 0 0;
  }
  .loginNewH5 .loginListN li {
    position: relative;
    height: 48px;
    padding: 0 0 0 30px;
    border-bottom: 1px solid #dbdbde;
    overflow: hidden;
  }
  .loginNewH5 .loginListN li input {
    width: 83%;
    margin-top: 18px;
    padding: 0;
    font-size: 15px;
    font-family: microsoft yahei;
    color: #333;
    border: none;
    outline: none;
  }
  .loginNewH5 .loginListN li .del {
    display: none;
    background-position: 0 -30px;
}
.loginNewH5 .loginListN li .del, .loginNewH5 .loginListN li .eye {
    position: absolute;
    top: 20px;
    right: 0;
    display: block;
    width: 18px;
    height: 15px;
    background: url(http://static5.baihe.com/images/newH5/icon_index_02.png) no-repeat;
    background-size: 100% auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
  }
  .loginNewH5 .loginListN li.mobile:after {
    background-position: 0 0;
  }
  .loginNewH5 .loginListN li:after {
    position: absolute;
    top: 50%;
    left: 0;
    width: 12px;
    height: 16px;
    margin-top: -4px;
    background: url(http://static5.baihe.com/images/newH5/icon_index.png) no-repeat;
    background-size: 100% auto;
    content: "";
  }
  .loginNewH5 .loginListN li .grayBtn {
    position: absolute;
    right: 0px;
    top: 16px;
    display: block;
    width: 80px;
    height: 24px;
    font: 12px/24px "Microsoft YaHei";
    color: #aaa;
    text-align: center;
    background: #f5f6f7;
    border-radius: 100px;
  }
  .loginNewH5 .loginListN li.code input {
    width: 60%;
  }
  .loginNewH5 .loginListN li.code:after {
    background-position: 0 -16px;
  }
  .loginNewH5 .loginListN li .icon .del {
    right: 23px;
  }
  .loginNewH5 .loginListN li .del {
    display: none;
    background-position: 0 -30px;
  }
  .loginNewH5 .loginListN li .eye {
    background-position: 0 0;
  }
  .loginNewH5 .loginListN li .del, .loginNewH5 .loginListN li .eye {
    position: absolute;
    top: 20px;
    right: 0;
    display: block;
    width: 18px;
    height: 15px;
    background: url(http://static5.baihe.com/images/newH5/icon_index_02.png) no-repeat;
    background-size: 100% auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
  }
  .loginNewH5 .loginListN li.pwd:after {
    background-position: 0 -32px;
  }
  .loginNewH5 .codeBox {
    width: 260px;
    height: 40px;
    margin: 10px auto;
    padding: 0;
    text-align: center;
  }
  .loginNewH5 .codeBox img {
    float: left;
    width: 80px;
    height: 40px;
    margin: 0 20px 0 0;
  }
  .loginNewH5 .indexN img {
    display: block;
    width: 100%;
  }
  .loginNewH5 .codeBox input {
    float: left;
    width: 145px;
    height: 38px;
    padding: 0 5px;
    font-size: 14px;
    font-family: microsoft yahei;
    border: 1px solid #e2e2e4;
  }
  .grayIcon {
    display: block;
    width: 80%;
    height: 40px;
    margin: 0 auto 20px;
    font: 15px/38px 'microsoft Yahei';
    text-align: center;
    color: #aaa;
    background: rgba(243,244,245,0.80);
    border-radius: 39px;
    overflow: hidden;
    cursor: auto;
  }
  .loginNewH5 .gradientIcon {
    display: block;
    height: 40px;
    width: 80%;
    margin: 30px 44px 45px;
    font: 16px/40px 'microsoft Yahei';
    color: #fff;
    text-align: center;
    background-image: linear-gradient(90deg, #ff7e44 2%, #ff4772 98%);
    border-radius: 76px;
    overflow: hidden;
  }
  .loginNewH5 .indexN .conText {
    padding-bottom: 30px;
    font: 12px/12px "Microsoft YaHei";
    color: #aaa;
    text-align: center;
  }
  .loginNewH5 .indexN .conText .aTxt {
    color: #4fa0d3;
  }
  .bhjyInfoArea {
    height: 120px;
    width: 100%;
    z-index: 100;
    font: 12px/12px "Microsoft YaHei";
    text-align: center;
    color: #ccc;
    line-height: 18px;
  }
  input, textarea, select, button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 400 13.3333px Arial;
  }

  .loginNewH5 .loginListN {
    margin: 0 30px;
    padding: 15px 0 0;
  }
  .loginNewH5 .loginListN li {
    position: relative;
    height: 48px;
    padding: 0 0 0 30px;
    border-bottom: 1px solid #dbdbde;
    overflow: hidden;
  }
  .loginNewH5 .loginListN li input {
    width: 83%;
    margin-top: 18px;
    padding: 0;
    font-size: 15px;
    font-family: microsoft yahei;
    color: #333;
    border: none;
    outline: none;
  }
  .loginNewH5 .loginListN li .del {
    display: none;
    background-position: 0 -30px;
  }
  .loginNewH5 .loginListN li .del, .loginNewH5 .loginListN li .eye {
    position: absolute;
    top: 20px;
    right: 0;
    display: block;
    width: 18px;
    height: 15px;
    background: url(http://static5.baihe.com/images/newH5/icon_index_02.png) no-repeat;
    background-size: 100% auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
  }
  .loginNewH5 .loginListN li.mobile:after {
    background-position: 0 0;
  }
  .loginNewH5 .loginListN li:after {
    position: absolute;
    top: 50%;
    left: 0;
    width: 12px;
    height: 16px;
    margin-top: -4px;
    background: url(http://static5.baihe.com/images/newH5/icon_index.png) no-repeat;
    background-size: 100% auto;
    content: "";
  }
  .loginNewH5 .codeBox {
    width: 260px;
    height: 40px;
    margin: 10px auto;
    padding: 0;
    text-align: center;
  }
  .loginNewH5 .codeBox img {
    float: left;
    width: 80px;
    height: 40px;
    margin: 0 20px 0 0;
  }
  .loginNewH5 .indexN img {
    display: block;
    width: 100%;
  }
  .loginNewH5 .codeBox input {
    float: left;
    width: 145px;
    height: 38px;
    padding: 0 5px;
    font-size: 14px;
    font-family: microsoft yahei;
    border: 1px solid #e2e2e4;
  }
  .loginNewH5 .pwdBox {
    margin: 5px 30px 15px;
    overflow: hidden;
  }
  .loginNewH5 .pwdBox a {
    display: block;
    font: 13px/23px "Microsoft YaHei";
    color: #7a7a7a;
  }
  .e_right, .fr {
    float: right;
  }
  .e_left, .fl {
    float: left;
  }
  .loginNewH5 .pwdBox .remindA em.active {
    background-position: 0 -13px;
  }
  .loginNewH5 .pwdBox .remindA em {
    position: relative;
    top: 2px;
    display: inline-block;
    width: 13px;
    height: 13px;
    margin-right: 5px;
    background: url(http://static5.baihe.com/images/newH5/agree_07.png) no-repeat;
    background-size: 100% auto;
  }
  .loginNewH5 .grayBtn2 {
    display: block;
    height: 40px;
    margin: 30px 44px 45px;
    font: 16px/40px Arial, "Microsoft YaHei";
    color: #666;
    text-align: center;
    background: rgba(243,244,245,.8);
    border-radius: 76px;
  }
  input {
    color: #333;
    font-size: 16px;
    font-family: microsoft yahei;
    border: none;
    outline: none;
  }
</style>
