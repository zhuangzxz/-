import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	myInfo: {
  		isShowBack: false
  		// backToHref:"#/myinfo"
  	},
    mainPanel: {
      isFooterBarShow: true
    }
  },
  mutations: {
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
