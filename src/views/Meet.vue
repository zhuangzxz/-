<template>
  <div class="meet">
    <h2>邂逅</h2>
    <div class="modeCont"></div>
    <div id="app">
    <div class="xhLove">
        <div class="lick" @click="no()" ></div>
        <div class="lick" @click="yes()"></div>
    
    </div>
    
    <div class="xhphotoBox"  v-for='data in looplist' >
        <router-link to="/meet/information" tag="a" class="goToProfileA">
            <img :src="data.headPhotoUrl_120_150" style=" width: 245px;
    height: 245px; ">
    </router-link>
            
        
        <p>
           <router-link to="/meet/information" tag="a" class="goToProfileA">{{data.nickname}}</router-link>
            <img src="//static5.baihe.com/images/newH5/userIcon2.png" width="17" height="17">
        </p>
        <router-link to="/meet/information" tag="a" class="goToProfileA">
            <span>{{data.age}}岁</span>
            <span>{{data.height}}cm</span>
            <span>{{data.educationChn}}</span>
            <span>{{data.incomeChn}}</span>
        </router-link> 
    </div> 

</div>
   
    <router-view></router-view>
  </div>
</template>

<style >
*{ padding: 0; margin: 0; } 
a{ text-decoration: none; }

    .meet{
        width: 100%;
        height: 100%;
        position: absolute;
        margin: 0px;
        padding: 0px;
        background: rgb(238, 238, 238);
        display: block;
} 
.modeCont{
    position: relative;
    width:290px;
    height: 365px;
    margin: 0 auto;
    text-align: center;
    background: url(http://static5.baihe.com/images/newH5/photoBg.gif) no-repeat;
    background-size: 100% auto;
    overflow: hidden;
}
.xhLove{
     padding: 0 0 48px;
    text-align: center;
}

.xhLove .lick {
    display: inline-block;
    width: 53px;
    height: 53px;
    margin: 0 25px;
    text-indent: -999em;
    background: url(http://static5.baihe.com/images/newH5/aPic.png) no-repeat;
    background-size: 100% auto;
    outline: none;
}
.xhLove div:nth-child(1) {
    background-position: 0 -53px;
}

.xhLove div:nth-child(2) {
    background-position: 0 0;
}
.xhphotoBox {
    position: absolute;
    top: 49px;
    left: 72px;
    width: 268px;
    height: 327px;
    padding: 6px 0 0;
    background: #fff;
    border: 1px solid #f3f3f4;
}

.xhphotoBox .aPhoto em {
    display: none;
    position: absolute;
    bottom: 10px;
    left: 90px;
    width: 120px;
    height: 104px;
    text-indent: -999em;
    background-size: 100% auto;
}
.xhphotoBox p {
    padding: 10px 0 0;
}
.xhphotoBox p img {
    position: relative;
    top: 2px;
    padding: 0 0 0 6px;
}
.xhphotoBox span {
    padding: 0 6px;
    color: #666;
    font: 15px/26px microsoft yahei;
}
.xhphotoBo a img{
    width: 225px;
    height: 225px;
}
</style>

<script>
import Vue from 'vue'
import axios from 'axios';
  export default {
         data(){

        return{
           looplist:[]        
        }  
      },
      mounted(){
        axios({
            url:"data/f/getmembership",
            params:{
                page:Math.floor(Math.random()*100),
                limit:100
            }
         }).then(res=>{
            console.log(res.data);
            this.looplist= res.data.data;
        })
      },

  methods:{
    no(){
       this.looplist.pop();
    },
     yes(){
     this.looplist.pop()
    },
  }
}
  
    
  
</script>

