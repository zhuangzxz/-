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

export default {
  components: {
    myinfoHeader
  }
}
</script>
