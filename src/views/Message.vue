<template>
  <div class="message" @click="zsxClick()">
    <div class="msghead" id="msg_head" style="position: absolute; top: 0px;"><div class="orgBg"><a id="talkListHeaderTtl" href="javascript:;" class="fl"></a><a id="topdelete" class="fr text2" href="javascript:;"></a><span id="talkUserTitle">消息</span></div></div>
 <div class="abc"></div>
 <ul>    <li><img src="//images10.baihe.com/msg/bhhn.jpg" ><div class="text"><div class="name">红娘牵线</div><p>别再苦苦等待，红娘帮你找到合适的人</p></div> <div class="time"></div></a></li></ul>
 <ul>    <li><img src="http://photo9.baihe.com/2018/11/30/100_100/F2126C6D0E61D581637C198B932656F6.jpg" ><div class="text"><div class="name">熊梅</div><p>32岁辽宁大连</p></div> <div class="time"></div></a></li></ul>

 <ul>    <li><img src="http://photo3.baihe.com/2018/08/12/100_100/377097CCC3DA9C6F62AA5D350A21A26D.jpg" ><div class="text"><div class="name">张丽丽</div><p>54岁 辽宁大连</p></div> <div class="time"></div></a></li></ul>

 <ul>    <li><img src="http://photo9.baihe.com/2018/06/12/100_100/DDF990C1B19E03E8D14142262753B2C2.jpg" ><div class="text"><div class="name">王丽萍</div><p>43岁 辽宁大连</p></div> <div class="time"></div></a></li></ul>

 <ul>    <li><img src="http://photo11.baihe.com/2011/10/29/100_100/47C8EB1E13FCDB5CE8A3E983F95F67D8.jpg" ><div class="text"><div class="name">高玲玲</div><p>63岁 辽宁大连</p></div> <div class="time"></div></a></li></ul>

 <ul>    <li><img src="http://photo12.baihe.com/2016/09/24/100_100/5C42071279F25BA05EA26EE7810FFBDA.jpg" ><div class="text"><div class="name">王连平</div><p>53岁 辽宁大连</p></div> <div class="time"></div></a></li></ul>

 <ul>    <li><img src="http://photo4.baihe.com/2019/02/07/100_100/001F43734217F8A3D0A6C4070EFD3809.jpg" ><div class="text"><div class="name">行梁</div><p>56岁 辽宁大连</p></div> <div class="time"></div></a></li></ul>

 <ul>    <li><img src="http://photo7.baihe.com/2019/02/17/100_100/5E26F91E2EB6CDAF647F871E0A6EBCBC.jpg" ><div class="text"><div class="name">蜡块</div><p>58岁 辽宁大连</p></div> <div class="time"></div></a></li></ul>

 <ul>    <li><img src="http://photo3.baihe.com/2018/06/27/100_100/F4EB1F93600CC9E81B3A6935B9BC46F6.jpg" ><div class="text"><div class="name">阿拉蕾</div><p>55岁 辽宁大连</p></div> <div class="time"></div></a></li></ul>

 <ul>    <li><img src="http://photo12.baihe.com/2018/06/17/100_100/678AD75340316B258D1ED7210ECFB7BC.jpg" ><div class="text"><div class="name">拉斯科</div><p>52岁 辽宁大连</p></div> <div class="time"></div></a></li></ul>

  </div>

</template>

<style scoped type="text/css"">
* {
    margin: 0;
    padding: 0;
}

    .msghead {

    text-align: center;
    display: block;
    opacity: 1;
    position: absolute;
    top: 0;
    z-index: 2;
    width: 100%;
    text-align: center;
    font: 18px/42px microsoft yahei;

}

.msghead .orgBg {
    height: 42px;
    background: #ff6400;
    color: #fff;
}
.abc{
    height: 5px;
    margin-top: 45px;
}
ul li{
    width: 100%;
    height: 45px;
    margin-top: 10px;
    position: relative;
        border-bottom: 1px solid #e9e9e9;

}
 img{
    width: 45px;
 height: 45px;
     border-radius: 100%;
     float: left }
     .name{
        width: 68%;
    font: 16px/22px microsoft yahei;
    color: #000;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    float:left;
    position:relative;
    left: 19px;
     }
p{
            width: 100%;
    font: 12px/21px microsoft yahei;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    position: absolute;
    top: 23px;
    left: 60px;
     }
</style>

<script type="text/javascript">
    import { Toast } from 'vant'
export default {
  methods: {
    zsxClick () {
      location.href = 'http://i.baihe.com/#ctrl=pay&act=redline'
    }
  },
  created () {
    this.$store.commit('changeMainPanelFooterBar', true);
    if(!this.$store.state.userData.isLogin){
      Toast(`登录状态过期，请重新登录`)
      setTimeout(()=>{this.$router.push('/')},1000);
    }
  }
}
</script>
