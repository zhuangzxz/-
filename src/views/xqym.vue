<template>
    <div class="vip">
      <div id="nav">
      <mt-header title="金骏眉">
      <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
      </mt-header>
      </div>
    <div class="userPicT">
        <h5 class="bg"></h5>
      <div class="pic">
        <img src="http://photo8.baihe.com/2019/02/15/100_100/57A9B5E57AF9A86A79A35B36288B6140.jpg">
      </div>
       <div class="bottom">
        <span>24岁 · 160厘米</span>
        <img src="//static5.baihe.com/images/newH5/userIcon2.png" width="17" height="17">
      </div>
    </div>
   <div class="photoList" style="overflow: auto hidden;
    margin: 0px auto;
    width: 95%;
    padding-left: 0px;">
       <ul>
           <li>
             <router-link to="" tag="a">
               <img src="http://photo1.baihe.com/2019/02/15/190_190/57A9B5E57AF9A86A79A35B36288B6140.jpg">
             </router-link>
           </li>
       </ul>
   </div>
   <div :class="index ? 'userTextQ':'userText'">
    <p>我希望自己不是这里的一个过客，盼望找到我爱的人，我会一直努力寻找，遇到了，珍惜，不放手。</p>

    <a href="javascript:;" class="clickZk" id="userIntroduce" @click="onclick" >点击展开</a>
   </div>
   <div class="userInforList zhanshi">
    <ul>
        <li style="text-align:left">学历<span>高中</span></li>
        <li><span>2000-5000元</span>月收入</li>
        <li><span>北京东城</span> 居住地 </li>
    </ul>
    <div style="display:none; border-top-style:none; padding-bottom:114px;">
        <ul><li><span>170041111</span>ID</li>
            <li><span>在温莎堡优美的黑颈鹤</span>昵称</li>
            <li><span>女</span>性别</li>
            <li><span>1996-04-15</span>出生年月</li>
            <li><span>163厘米</span>身高</li>
            <li><span>2000-5000元</span>月收入</li><li><span>北京东城</span> 居住地 </li>
            <li><span>高中</span>学历</li>
            <li><span>未婚</span>婚姻状况</li>
            <li><span>以后再告诉你</span>有无子女</li>
            <li><span>以后再告诉你</span>购房情况</li>
            <li><span>以后再告诉你</span>购车情况</li>
            <li><span>以后再告诉你</span>职业职位</li>
        </ul>
        <h5>择偶要求</h5>
        <ul><li><span>26-46岁</span>年龄</li>
            <li><span>163-188厘米</span>身高</li>
            <li><span>大专，本科，硕士，博士</span>学历</li>
            <li><span>20000-50000，&gt;50000元</span>月收入</li>
            <li><span>北京市</span> 居住地 </li>
            <li><span>不限</span>婚姻状况</li>
            <li><span>不限</span>购房情况</li>
            <li><span>不限</span>有无子女</li>
        </ul>
    </div>
    <a href="javascript:;" class="clickZk" id="profileUIfo">点击展开</a>
    </div>
     <div class="btnLine" id="sendMsgAndSayHello">    <a href="javascript:;" class="orgBtn orgBtn4 userBtn" id="sayHello">打招呼</a>    <a href="javascript:;" class="orgBtn userBtn" id="sendMsgA">发消息</a></div>
    </div>

</template>

<style type="text/css">
*{margin: 0;
padding: 0;}
   #nav{margin: 0;
    padding: 0;}
    .mint-header {
        background:#f60;
    }
    .userPicT {
    position: relative;
    height: 140px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 140px;
}
.userPicT .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 140px;
    background: url(http://static5.baihe.com/images/newH5/userPicBg.png) no-repeat center top;
    text-indent: -99999px;
    background-size: 960px 140px;
    z-index: 10;
}
.userPicT .pic {
    display: block;
    width: 84px;
    height: 84px;
    margin: 16px auto 0;
    }
    .userPicT .pic img {
    display: block;
    width: 84px;
    height: 84px;
    -moz-border-radius: 42px;
    -webkit-border-radius: 42px;
    border-radius: 42px;
}
.userPicT .bottom {
    position: absolute;
    bottom: 12px;
    left: 50%;
    width: 156px;
    height: 22px;

    margin: 0 0 0 -78px;
    z-index: 205;
}
.userPicT .bottom span {
    padding: 0 6px 0 0;
    color: #fff;
    font: 12px/22px microsoft yahei;
}
.userPicT .bottom img {
    padding: 0 0 0 5px;
    vertical-align: middle;
    }

.photoList {
    height: 64px;
    padding: 10px 0 10px 15px;
    white-space: nowrap;
    overflow: hidden;
}
.photoList ul li img {
    display: block;
    width: 62px;
    height: 62px;
}
.userText {
    position: relative;
    height: 44px;
    padding: 10px 15px;
    border-top: 1px solid #e6e6e8;
    border-bottom: 1px solid #e6e6e8;
    background: #fff;
}
.userText p {
    height: 44px;
    color: #666;
    font: 14px/22px microsoft yahei;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.userText a.clickZk {
    bottom: -7px;
}
.userText a.clickZk, .userInforList a.clickZk {
    position: absolute;
    left: 50%;
    width: 24px;
    height: 15px;
    margin-left: -12px;
    text-indent: -999em;
    background: url(http://static5.baihe.com/images/newH5/unfold.png) no-repeat;
    background-size: 100% 100%;
    z-index: 6;
}

.userTextQ {
    position: relative;
    padding: 10px 15px;
    border-top: 1px solid #e6e6e8;
    border-bottom: 1px solid #e6e6e8;
    background: #fff;
}
.userTextQ p {
    color: #666;
    font: 14px/22px microsoft yahei;
    overflow: hidden;
}

.userTextQ a.clickZk {
    position: absolute;
    left: 50%;
    bottom: -7px;
    width: 24px;
    height: 15px;
    text-indent: -999em;
    background: url(http://static5.baihe.com/images/newH5/upfold.jpg) no-repeat;
    background-size: 100% 100%;
    z-index: 6;
}
.userInforList {
    position: relative;
    margin: 15px 0 0;
}
.userInforList ul {
    padding: 0 0 0 15px;
    background: #fff;
    border-top: 1px solid #e6e6e8;
    border-bottom: 1px solid #e6e6e8;
}
.userInforList ul li {
    height: 48px;
    padding: 0 15px 0 0;
    font: 16px/48px microsoft yahei;
    color: #333;
    border-bottom: 1px solid #f0f0f1;
    overflow: hidden;
    text-align:left;
}
.zhanshi ul li span {
    width: 190px;
    height: 48px;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.userInforList ul li span {
    float: right;
    color: #666;
}

.userInforList a.clickZk {
    bottom: -7px;
}
.userText a.clickZk, .userInforList a.clickZk {
    position: absolute;
    left: 50%;
    width: 24px;
    height: 15px;
    margin-left: -12px;
    text-indent: -999em;
    background: url(http://static5.baihe.com/images/newH5/unfold.png) no-repeat;
    background-size: 100% 100%;
    z-index: 6;
}
.btnLine {
    width: 100%;
    padding: 15px 0 85px;
    text-align: center;
    overflow: hidden;
}
.btnLine a {
    display: inline-block;
    width: 44%;
    height: 44px;
    margin: 0 5px;
    line-height: 44px;
}
.orgBtn {
    background: #ff6400;
}
.orgBtn4 {
    background: #fe8b00;
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
</style>

<script type="text/javascript">
export default {
  data () {
    return {
      index: false

    }
  },
  methods: {
    onclick () {
      this.index = !this.index// 把当前点击元素的index，赋值给activeClass
    }
  }
}

</script>
