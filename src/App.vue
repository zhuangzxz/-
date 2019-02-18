<template>
  <div id="app">
    <router-view/>
    <footerbar-nav></footerbar-nav>
  </div>
</template>

<style lang="scss">
html{
  overflow-x: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script type="text/javascript">
import footerbarNav from './components/FooterNavBar.vue'

export default {
  components: {
    footerbarNav
  }
}
</script>
