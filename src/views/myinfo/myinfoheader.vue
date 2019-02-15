<template>
    <div class="myinfo-header-container" :style="styleObj">
      <!-- <van-nav-bar title="标题" left-text="返回" id="myinfo-header" left-arrow> -->
      <van-nav-bar title="我的" id="myinfo-header" @click-right="onClickRight">
        <van-icon name="setting-o" slot="right" />
      </van-nav-bar>
    </div>
</template>

<style scoped type="text/css">
  .myinfo-header-container{
    position: fixed;
    top: 0;
    height: 42px;
    width: 100%;
  }
  #myinfo-header{
    background-color: #FF6400;
    color: #fff;
    height: 42px;
    
  }
  .van-nav-bar .van-icon{
    color: #fff;
    font-size: 20px;
  }
  .van-nav-bar__title{
    color: #fff;
  }
</style>

<script type="text/javascript">
  import Vue from "vue"
  import { NavBar } from 'vant';
  import { Icon } from 'vant';
  import { Toast } from 'vant';
  Vue.use(Icon);
  Vue.use(NavBar);
  Vue.use(Toast);

  export default {
    methods: {
      onClickLeft() {
        Toast('返回');
      },
      onClickRight() {
        Toast('按钮');
      }
    },
    data(){
      return{
        styleObj:{
          "color":"#FFF"
        }
      }
    }
  }
</script>