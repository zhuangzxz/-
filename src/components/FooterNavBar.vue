<template>
  <div class="footerbar-nav">
    <mt-tabbar v-model="selected">
    <mt-tab-item id="tab1">
      <a href="/meet" class="footerbar-link">邂逅</a>
    </mt-tab-item>
    <mt-tab-item id="tab2">
      <a href="/search" class="footerbar-link">搜索</a>
    </mt-tab-item>
    <mt-tab-item id="tab3">
      <a href="/message" class="footerbar-link">消息</a>
    </mt-tab-item>
    <mt-tab-item id="tab4">
      <a href="/vip" class="footerbar-link">VIP</a>
    </mt-tab-item>
    <mt-tab-item id="tab5">
      <a href="/myinfo" class="footerbar-link">我的</a>
    </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<style type="text/css">
  .footerbar-link{
    display: block;
  }
</style>

<script type="text/javascript">
  import { Tabbar, TabItem } from 'mint-ui';
  import Vue from 'vue'

  import 'mint-ui/lib/style.css';
 
  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);

  export default{
    data () {
      return {
        selected: false
      }
    },
  }
</script>