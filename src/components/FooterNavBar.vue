<template>
  <div class="footerbar-nav">
    <mt-tabbar>
      <mt-tab-item id="tab1" class="footerbar-tab">
        <router-link tag="a" to="/meet" class="footerbar-link meet" activeClass="active" exact>
          <p class="title">邂逅</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="tab2" class="footerbar-tab">
        <router-link tag="a" to="/search" class="footerbar-link search" activeClass="active" exact>
          <p class="title">搜索</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="tab3" class="footerbar-tab">
        <router-link tag="a" to="/message" class="footerbar-link message" activeClass="active" exact>
          <p class="title">消息</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="tab4" class="footerbar-tab">
        <router-link tag="a" to="/vip" class="footerbar-link vip" activeClass="active" exact>
          <p class="title">VIP</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="tab5" class="footerbar-tab">
        <router-link tag="a" to="/myinfo" class="footerbar-link title" activeClass="active" exact>
          <p class="title">我的</p>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style type="text/css" lang="scss">
  .footerbar-nav{
    height:49px!important;
    position: fixed;
    bottom: 0;
    width: 100%;

    .footerbar-tab{
      .active{
        .title{
          color:#ff5e00;
        }
      }
      .footerbar-link{
        position: relative;
        display: block;
        padding-top: 22px;
        margin: 0 0 0 -14px;
        .title{
          height:20px;
          line-height: 20px;
          font-size: 12px;
          text-align: center;
          padding-left: 26px;
        }
      }
    }
  }
  .footerbar-link::before{
    content:"";
    width: 28px;
    height: 22px;
    position: absolute;
    top:0;
    left: 50%;
    background: url("../../public/vender/images/navBottBg.png") no-repeat center top;
    background-size: 100% auto;
  }
  .footerbar-tab:nth-child(1) .footerbar-link.active::before{
    background-position: 0 -110px;
  }
  .footerbar-tab:nth-child(2) .footerbar-link::before{
    background-position: 0 -22px;
  }
  .footerbar-tab:nth-child(2) .footerbar-link.active::before{
    background-position: 0 -132px;
  }
  .footerbar-tab:nth-child(3) .footerbar-link::before{
    background-position: 0 -44px;
  }
  .footerbar-tab:nth-child(3) .footerbar-link.active::before{
    background-position: 0 -264px;
  }
  .footerbar-tab:nth-child(4) .footerbar-link::before{
    background-position: 0 -219px;
  }
  .footerbar-tab:nth-child(4) .footerbar-link.active::before{
    background-position: 0 -241px;
  }
  .footerbar-tab:nth-child(5) .footerbar-link::before{
    background-position: 0 -88px;
  }
  .footerbar-tab:nth-child(5) .footerbar-link.active::before{
    background-position: 0 -198px;
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