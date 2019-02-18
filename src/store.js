import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData:{
      isLogin:false
    },
    myInfo: {
      isShowBack: false
      // backToHref:"#/myinfo"
    },
    mainPanel: {
      isFooterBarShow: true
    },
    meetInfo: {
      looplist:[]
    },
    publicData: {
      weatherData:{}
    }
  },
  mutations: {
    setUserDataIsLogin(state, payload){
      this.state.userData.isLogin = payload;
    },
    setPublicWeatherData(state, payload){
      this.state.publicData.weatherData = payload;
    },
    setMeetInfoLoopList(state, payload){
      this.state.meetInfo.looplist = payload;
    },
    changeMyInfoHeadBarShowBack (state, payload) {
      this.state.myInfo.isShowBack = payload
      // this.state.myInfo.backToHref = href;
    },
    changeMainPanelFooterBar (state, payload) {
      this.state.mainPanel.isFooterBarShow = payload
    }
  },
  actions: {

  }
})
