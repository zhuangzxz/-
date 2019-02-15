<template>
  <div class="searchheader">
    <span class="one">年龄:{{ageA}}-{{ageB}}岁</span>
    <span class="two">身高:{{statureA}}-{{statureB}}厘米</span>
    <span class="three">交友</span>
    <span class="four" @click="handclick()"></span>
    <div class="box" v-show="isShow">
        <span class="nl">年龄:<u @click="vanclick('ageA')">{{ageA}}</u>-<u @click="vanclick('ageB')">{{ageB}}</u>岁</span>
         <span class="nl">身高:<u @click="vanclicks('statureA')">{{statureA}}</u>-<u @click="vanclicks('statureB')">{{statureB}}</u>岁</span>
        <button @click="btClick()">搜索</button>
        <van-popup v-model="show" position="bottom" :overlay="true">
           <van-picker show-toolbar title="标题" :columns="columns" @cancel="onCancel" @confirm="onConfirm" ref="zz"/> 
        </van-popup>
        <van-popup v-model="statureShow" position="bottom" :overlay="true">
           <van-picker show-toolbar title="标题" :columns="stature" @cancel="onCancel" @confirm="onConfirm" ref="zz"/> 
        </van-popup>
    </div>
  </div>
</template>


<script type="text/javascript">
import Vue from "vue"
import 'vant/lib/button/style';
import 'vant/lib/index.css';
import { Picker } from 'vant';
import { Popup } from 'vant';
Vue.use(Picker);
Vue.use(Popup);
  export default {
    data(){
        return {
            ageA:18,
            ageB:25,
            statureA:145,
            statureB:200,
            isShow:false,
            show:false,
            statureShow:false,
            current: null,
            columns: [18,19,20,21,22,23,24,25,26,27,28,29,30],
            stature: [145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190]
        }
    },
    methods:{
       handclick(){
        this.isShow=!this.isShow
       },
       onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      Toast(item.name);
    },
    vanclick(current){
        this.show=!this.show;
        this.current = current;
        // setTimeout(()=>{console.log(this.$refs.zz.getColumnIndex())},20)
    },
    vanclicks(current){
        this.statureShow=!this.statureShow;
        this.current = current;
        // setTimeout(()=>{console.log(this.$refs.zz.getColumnIndex())},20)
    },
    onConfirm(value, index) {
        this[this.current] = value;
      this.show=false;
      this.statureShow=false;
    },
    onCancel() {
      this.show=false;
      this.statureShow=false;
    },
    btClick(){
        this.isShow=false
    }
    }
  }
</script>
<style scoped lang="scss">
*{
    padding:0;
    margin:0;
}
    .searchheader{
        width:100%;
        height:44px;
        background:red;
        color: #999;
        border: 1px solid #e3e3e3;
        background: #fff;
        position:fixed;
        top:0;
        left:0;
        z-index:1;
    .one{
        height:44px;
        line-height:44px;
        margin-right:20px;
    }
    .two{
        margin-right:30px;
    }
    .three{
        display:inline-block;
        width:78px;
    }
    .four{
        display:inline-block;
        line-height:44px;
        border:7px solid #999;
        border-bottom:none;
        border-right:7px solid #fff;
        border-left:7px solid #fff;
        }
    .box{
        width:100%;
        height:613px;
        background:#fff;
        position:fixed;
        top:54px;
        left:0px;
        z-index:1;
    }
    ul{
        list-style:none;
        li{
            height:44px;
            line-height:44px;
            border-bottom:1px solid #999;
            input{
                width:20px;
                height:20px;
                border:none;
            }
            .boa{
                float:left;
                margin-left:15px;
            }
            .bob{
                float:right;
                margin-right:15px
            }
        }
       
    }
    .baa{
        background:#fff;
        width:100%;
        height:44px;
        position:fixed;
    }
    .nl{
        display:inline-block;
        line-height:44px;
        background:#FFF;
        width:100%;
        height:44px;
        border-bottom:1px solid #999;
        color:#000;
    }
    button{
        width:345px;
        height:42px;
        position:fixed;
        top:50%;
        left:15px;
        background:#f60;
        color:#fff;
        border:none;
    }
}
</style>