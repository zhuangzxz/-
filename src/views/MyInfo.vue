<template>
  <div class="myinfo">
    <myinfo-header></myinfo-header>
    <div id="myinfo-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped="" type="text/css">
  #myinfo-main{
    position: absolute;
    top: 42px;
    width:100%;
  }
</style>

<script type="text/javascript">
import myinfoHeader from './myinfo/myinfoheader'
import { Toast } from 'vant'
export default {
  components: {
    myinfoHeader
  },
  created(){
    if(!this.$store.state.userData.isLogin){
      Toast(`登录状态过期，请重新登录`)
      setTimeout(()=>{this.$router.push('/')},1000);
    }
  }
}
</script>
