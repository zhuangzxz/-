<template>
  <div class="search">
    <headers @event="myevent($event)" ></headers>
    <ul  v-show="!isLoading" >
        <li v-for='data in looplist'>
            <div class="top" @click="locClick(data.userID)">
                <dl>
                    <dt>
                        <img  :src="data.headPhotoUrl_120_150"></dt>
                    <dd>
                        <h3>{{data.nickname}}</h3>
                        <p class="textA">
                            {{data.age}}岁 • {{data.height}}cm • {{data.educationChn}} • {{data.incomeChn}} • {{data.education}}
                        </p>
                        <p class="textB">{{data.familyDescription}}</p>
                        <span class="hoa">旅游</span><span class="hob">养花</span>
                    </dd>
                </dl>
            </div>
            <div class="bottom">
                <router-link to="/message" tag="span">聊天</router-link>
               <!--  <span>聊天</span> -->
                <span @click="handclick()">打招呼</span>
                <span @click="lick()">喜欢</span>
            </div>
        </li>
    </ul>
    <van-loading type="circular" class="loading" v-if="isLoading" size="50px" />
  </div>
</template>

<script type="text/javascript">
import headers from './searchs/SearchsHeader'
import Vue from 'vue'
import axios from 'axios'
import 'vant/lib/button/style'
import 'vant/lib/index.css'
import { Toast,Loading } from 'vant'

Vue.use(Loading);
Vue.use(Toast)
export default {
  components: {
    headers
  },
  data () {
    return {
      looplist: [],
      age: 23,
      hea: 160,
      isLoading: false
    }
  },
  mounted () {
    if (this.$store.state.searchInfo.looplist.length !== 0) {
      this.looplist = this.$store.state.searchInfo.looplist
    } else {
      this.isLoading = true;
      axios({
        url: 'data/f/getmembership',
        params: {
          cityid: '862102',
          page: 1,
          limit: 10
        }
      }).then(result => {
        this.isLoading = false;
        this.$store.commit('setSearchInfoLoopList', result.data.data)
        this.looplist = result.data.data;
        if(this.looplist.length===0){
          Toast(`你要求太高了，没找到符合条件会员`)
        }
      }).catch(err => {
        Toast(`服务器好像顶不住了`)
        this.isLoading = false;
      })
    }
  },
  methods: {
    locClick (id) {
      this.$router.push(`/xqym/${id}`)
    },
    myevent (ev) {
      console.log(ev)
      var optiopnObj = {}
      if(ev.age !== '不限')
        optiopnObj.age = ev.age
      if(ev.hea !== '不限')
        optiopnObj.hea = ev.age
      optiopnObj.limit = 50;
      this.isLoading = true;
      axios({
        url: 'data/f/getmembership',
        params: optiopnObj
      }).then(res => {
        this.isLoading = false;
        this.$store.commit('setSearchInfoLoopList', res.data.data)
        this.looplist = res.data.data
        if(this.looplist.length===0){
          Toast(`你要求太高了，没找到符合条件会员`)
        }
      }).catch(err => {
        Toast(`服务器好像顶不住了`)
        this.isLoading = false;
      })
    },
    handclick () {
      Toast.success('打招呼成功！')
    },
    lick () {
      Toast('已添加到喜欢列表，请到我的中查看！')
    }
  }
}
</script>
<style scoped lang="scss">
    ul{
        li{
            width: 100%;
            height: 183px;
            border-top: 1px solid #e3e3e3;
            margin-top:45px;
            .top{
                width: 100%;
                height: 138px;
                padding: 10px;
                padding-bottom:15px;
                border-bottom: 1px solid #e3e3e3;
                dt{
                    float: left;
                }
                dd{
                    width: 260px;
                    float:left;
                    padding: 6px 0 0;
                    h3{
                        height: 24px;
                        line-height:24px;
                        font-size: 16px;
                        color:#000;
                        text-align: left;
                    }
                    .textA{
                        font-size: 12px;
                        height: 24px;
                        line-height: 24px;
                        color: #808080;
                        text-align: left;
                    }
                    .textB{
                        height: 24px;
                        line-height: 24px;
                        font-size: 14px;
                        color: #444;
                        white-space: nowrap;
                        word-break: keep-all;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    span{
                        display: inline-block;
                        width: 52px;
                        height: 26px;
                        border-radius: 13px;
                        background: #66ccff;
                        font-size: 16px;
                        color:#fff;
                        position: absolute;
                        left:80px;
                    }
                    .hob{
                        background:#ff9900;
                        left:140px;
                    }
                }
                img{
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                }
            }
            .bottom{
                width: 100%;
                height: 43px;
                padding-top:7px;
                border-bottom: 1px solid #e3e3e3;
                display: flex;
                span{
                    flex:1;
                    height: 36px;
                    line-height: 36px;
                    font-size: 20px
                }
                span:nth-child(1){
                    border-right: 1px solid #e3e3e3;
                    color: #61b693
                };
                span:nth-child(2){
                    border-right: 1px solid #e3e3e3;
                    color:#6a91c6;

                }
                span:nth-child(3){
                    color:#ff6400;
                }
            }
        }
    }
    .loading{
        position:absolute;

        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        background-color: rgba(0, 0, 0, 0.6);
        border-radius:5px;
    }
</style>
