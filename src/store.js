import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	myInfo: {
  		isShowBack:true,
  		backToHref:"#myinfo"
  	}
  },
  mutations: {
    changeMyInfo(state,href){
      this.myInfo.isShowBack = state;
      this.myInfo.backToHref = href;
    }
  },
  actions: {

  }
})
