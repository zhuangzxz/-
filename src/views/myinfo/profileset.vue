<template>
  <div class="profileset">
    <div class="allProfile_setH5" id="setH5" v-if="isMainPanelShow" @click="showMain()">
      <ul class="whiteList">
        <li >
          <a href="javascript:;" id="myBHInfo" @click="showBaseInfo(true)">基本资料</a>
        </li>
        <li v-if="isMyBaseMatchShow">
          <a href="javascript:;" id="myBHMatch" >择偶要求</a>
        </li>
        <li>
          <a href="javascript:;" id="mySelfintroduction">我的介绍</a>
        </li>
        <li>
          <a href="javascript:;" id="myBHAuth">我的认证</a>
        </li>
      </ul>
    </div>

    <div class="myData" id="basicinfo_index" v-if="isMyBaseInfoShow">
      <div class="myData">
        <ul class="inforList">
          <li>ID <span style="margin-right:30px;">171310810</span></li>
          <li>昵称<input id="vBasicInfoNickname" type="" placeholder="请填写昵称" value="企鹅皮皮"></li>
          <li class="active">性别<span style="margin-right:30px;">男</span></li>
          <li id="sli1">出生日期<span style="margin-right:30px;">1989-01-15</span></li>
          <li>身高
            <input type="text" id="vBasicInfoHeight_dummy" class="mbsc-control mbsc-control-ev " readonly="" placeholder="" @click='ifBasicInfoHeightPopupShow=true' v-model="myinfo.height">
            <van-popup v-model="ifBasicInfoHeightPopupShow" position="bottom" :overlay="true" >
              <van-picker :columns="heightList" show-toolbar @cancel="onCancel" @confirm="onConfirm"/>
            </van-popup>
          </li>
          <li class="area">居住地
            <span>
              <input type="text" id="vBasicInfoProvince_dummy" class="mbsc-control mbsc-control-ev " readonly="" placeholder="" @click='ifBasicInfoLocationPopupShow=true'>
              <input type="text" id="vBasicInfoCity_dummy" class="mbsc-control mbsc-control-ev " readonly="" placeholder="" @click='ifBasicInfoLocationPopupShow=true'>
              <van-popup v-model="ifBasicInfoLocationPopupShow" position="bottom" :overlay="true">
                <van-picker :columns="citysList" @change="onChange" show-toolbar @cancel="onCancel" @confirm="onConfirm" />
              </van-popup>
              
            </span>
          </li>
          <li>学历
            <input type="text" id="vBasicInfoEducation_dummy" class="mbsc-control mbsc-control-ev " readonly="" placeholder="">
            <select id="vBasicInfoEducation" data-role="none" class="js_edu dw-hsel" tabindex="-1">
              <option value="1">初中</option><option value="2">中专/职高/技校</option><option value="3">高中</option><option value="4">大专</option><option value="5" selected="selected">本科</option><option value="6">硕士</option><option value="7">博士</option>
            </select>
          </li>
          <li id="sli2">婚姻状况
            <input type="text" id="vBasicInfoMarriage_dummy" class="mbsc-control mbsc-control-ev " readonly="" placeholder="">
            <select id="vBasicInfoMarriage" data-role="none" class="js_marista dw-hsel" tabindex="-1">
              <option value="1" selected="selected">未婚</option><option value="2">离异</option><option value="3">丧偶</option><option value="4">已婚</option>
            </select>
          </li>
          <li>有无子女
            <input type="text" id="vBasicInfoChildren_dummy" class="mbsc-control mbsc-control-ev " readonly="" placeholder="">
            <select id="vBasicInfoChildren" data-role="none" class="js_children dw-hsel" tabindex="-1">
              <option value="1">没有</option><option value="2">有，和我住一起</option><option value="3">有，有时和我住一起</option><option value="4">有，不和我住一起</option>
            </select>
          </li>
          <li>购房情况<input type="text" id="vBasicInfoHousing_dummy" class="mbsc-control mbsc-control-ev " readonly="" placeholder="">
            <select id="vBasicInfoHousing" data-role="none" class="js_house dw-hsel" tabindex="-1">
              <option value="1">以后再告诉你</option><option value="2">与父母同住</option><option value="3">租房</option><option value="4">已购房(有贷款)</option><option value="5">已购房(无贷款)</option><option value="6">住单位房</option><option value="7">住亲朋家</option><option value="8">需要时购置</option>
            </select>
          </li>
          <li>购车情况<input type="text" id="vBasicInfoCar_dummy" class="mbsc-control mbsc-control-ev " readonly="" placeholder="">
            <select id="vBasicInfoCar" data-role="none" class="js_car dw-hsel" tabindex="-1">
              <option value="1">未购车</option><option value="2">已购车</option><option value="3">单位用车</option><option value="4">需要时购置</option>
            </select>
          </li>
          <li>职业职务
            <input type="text" id="vBasicInfoOccupation_dummy" class="mbsc-control mbsc-control-ev " readonly="" placeholder="">
            <select id="vBasicInfoOccupation" data-role="none" class="js_job dw-hsel" tabindex="-1">
              <option value="1">计算机/互联网</option><option value="2">电子电器/通信技术</option><option value="3">机械/仪器仪表</option><option value="4">销售</option><option value="5">客服及技术支持</option><option value="6">财务/审计/税务</option><option value="7">证券/金融/投资/银行</option><option value="8">保险</option><option value="9">生产/营运</option><option value="10">质量/安全管理</option><option value="11">工程/能源</option><option value="12">贸易/采购</option><option value="13">物流/仓储/运输</option><option value="14">技工</option><option value="15">化工/环保</option><option value="16">生物/制药/医疗器械</option><option value="17">医院/医疗/护理</option><option value="18">广告</option><option value="19">市场/公关</option><option value="20">影视/媒体</option><option value="21">写作/出版/印刷</option><option value="22">翻译</option><option value="23">艺术/设计/创意</option><option value="24">建筑/房地产/装饰装修</option><option value="25">物业管理</option><option value="26">人力资源</option><option value="27">高级经营管理</option><option value="28">行政/后勤</option><option value="29">咨询/顾问</option><option value="30">律师/法务/合规</option><option value="31">教育/培训</option><option value="32">科研</option><option value="33">酒店/旅游/餐饮/娱乐 </option><option value="34">美容/健身</option><option value="35">商业零售服务</option><option value="36">交通运输服务</option><option value="37">保安/家政服务</option><option value="38">警察/其它</option><option value="39">公务员</option><option value="40">运动员</option><option value="41">农/林/牧/渔</option><option value="42">自由职业/兼职</option><option value="43">储备干部/培训生/实习生</option><option value="44">在校学生</option><option value="45">退休</option><option value="46">其它</option>
            </select>
          </li>
        </ul>
        <a id="vBasicInfoDoSaveBasic" href="javascript:" class="orgBtn">保存</a></div></div>
  </div>
</template>

<style scoped type="text/css">

  .profileset{
    text-align: left!important;
  }
  .whiteList {
    margin: 15px 0 20px 0;
    padding: 0 0 0 15px;
    background: #fff;
    border-top: 1px solid #e6e6e8;
    border-bottom: 1px solid #e6e6e8;
    overflow: hidden;
  }
  .whiteList li {
      position: relative;
      height: 48px;
      border-bottom: 1px solid #e6e6e8;
      overflow: hidden;
      zoom: 1;
  }
  .whiteList li:before {
    position: absolute;
    width: 8px;
    height: 12px;
    top: 20px;
    right: 15px;
    background: url(http://static5.baihe.com/images/newH5/arrowBg2.png) no-repeat;
    background-size: 100% 100%;
    content: "";
  }
  .whiteList li a {
    display: block;
    color: #333;
    font: 16px/48px microsoft yahei;
    overflow: hidden;
  }

  .inforList {
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
  }
  .inforList li {
    position: relative;
    height: 45px;
    margin: 0 0 0 15px;
    font: 16px/44px microsoft yahei;
    color: #333;
    border-bottom: 1px solid #e6e6e6;
  }
  .myData .inforList li:nth-child(1):before, .myData .inforList li:nth-child(3):before, .myData .inforList li:nth-child(4):before {
    background: none;
    content: "";
  }
  .myData .inforList li:nth-child(2):before {
    position: absolute;
    width: 13px;
    height: 20px;
    top: 16px;
    right: 12px;
    background: url(http://static5.baihe.com/images/newH5/editBg.png) no-repeat;
    background-size: 100% 100%;
    content: "";
  }
  .inforList li:before {
    position: absolute;
    width: 7px;
    height: 11px;
    top: 17px;
    right: 12px;
    background: url(http://static5.baihe.com/images/newH5/arrowBg9.png) no-repeat;
    background-size: 100% 100%;
    content: "";
  }
  .inforList li span {
      float: right;
      color: #999;
  }
  .inforList li input {
    float: right;
    width: 200px;
    height: 44px;
    margin-right: 30px;
    text-align: right;
    color: #666;
    font: 14px/44px microsoft yahei;
    border: none;
    outline: none;
    padding: 0;
  }
  .dw-hsel {
    position: absolute;
    height: 1px;
    width: 1px;
    left: 0;
    overflow: hidden;
    clip: rect(1px,1px,1px,1px);
  }
  .inforList .area span {
    margin-right: 12px;
  }
  .inforList .area span {
      display: inline-block;
      float: right;
  }
  .inforList li span {
      float: right;
      color: #999;
  }
  .inforList .area input {
    float: none;
    width: 64px;
    height: 43px;
    margin-right: 10px;
    padding-right: 22px;
    background: #fff url(http://static5.baihe.com/images/newH5/icon_sel.gif) no-repeat right center;
  }
  .dw-hsel {
    position: absolute;
    height: 1px;
    width: 1px;
    left: 0;
    overflow: hidden;
    clip: rect(1px,1px,1px,1px);
  }
  .js_province, .js_city {
      padding-right: 7px;
      font: 16px/48px microsoft yahei;
      color: #666;
      border: none;
      outline: none;
  }
</style>

<script type="text/javascript">
  import { Picker,Popup,Toast } from 'vant';
  import Vue from 'vue'
  import citys from '../../../public/vender/data/citylist'
  Vue.use(Popup);
  Vue.use(Picker);
  export default{
    methods:{
      showMain(){
        this.isMainPanelShow = true;
        this.isMyBaseInfoShow = false;
        this.isMyBaseMatchShow = false;
      },
      showBaseInfo(state){
        if(state){
          this.isMyBaseInfoShow = true;
          this.isMainPanelShow = false;
          this.isMyBaseMatchShow = false;
          console.log("qiehuan ",this.isMyBaseInfoShow)
        }else{
          this.isMyBaseInfoShow = false;
        }
      },
      onConfirm(value, index) {
        //Toast(`当前值：${value}, 当前索引：${index}`);
        this.ifBasicInfoHeightPopupShow = false;
        this.myinfo.height = value;
      },
        onCancel() {
        Toast('取消');
      },
      onChange(picker, values) {
        picker.setColumnValues(1, citys[values[0]]);
      }
    },
    data(){
      return{
        ifBasicInfoHeightPopupShow:false,
        ifBasicInfoLocationPopupShow:false,
        isMainPanelShow:true,
        isMyBaseInfoShow:false,
        isMyBaseMatchShow:false,
        myinfo:{
          height:170
        },
        heightList: ['165', '166', '167', '168', '169','170', '171', '172', '173', '174','175'],
        citysList:[
          {
            values: Object.keys(citys),
            className: 'column1'
          },
          {
            values: citys['浙江'],
            className: 'column2',
            defaultIndex: 2
          }
        ]
      }
    }
  }
</script>