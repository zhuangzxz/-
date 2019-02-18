<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Toast } from 'vant'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created () {
    if(!this.$store.state.userData.isLogin){
      Toast(`登录状态过期，请重新登录`)
      setTimeout(()=>{this.$router.push('/')},1000);
    }
  },
}
</script>
