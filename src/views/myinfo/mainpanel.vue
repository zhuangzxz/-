<template>
	<div class="main-panel">
		<div class="myIndex2">
			<div class="userTCont">
				<a href="javascript:;" class="pic">
					<img src="http://39.105.126.232:8010/image/houtinghua/微信截图_20190217073323.png" id="headPhoto">
				</a>
				<div class="txt">
					<h5 class="">小君君</h5>
					<div class="icon">
						<a href="javascript:;" class="realName gray">实名认证</a>
						<a href="javascript:;" class="mobile">手机认证</a>
					</div>
					<p>资料完整度<span>21%</span></p>
				</div>
				<a href="#/myinfo/profileset" class="arrow" id="myBHprofileSet">资料</a>
			</div>
			<div class="photoCont">
				<ul id="myBHphotoList">
					<li>
						<a href="javascript:;" id="gotoPhotoList">
							<img src="http://static5.baihe.com/images/newH5/addPhoto2.png">
						</a>
					</li>
				</ul>
			</div>
			<div class="navCont">
				<ul>
					<li class="skgw">
						<a href="javascript:;" id="myBHViewme"><em></em>谁看过我</a>
					</li>
					<li class="sxhw">
						<a href="javascript:;" id="myBHFocusme"><em></em>谁关注我</a>
					</li>
					<li class="wxhs">
						<a href="javascript:;" id="myBHMyfocus">
							<div class="image">
								<img src="http://photo2.baihe.com/2019/02/09/100_100/4416440532BE74FC980C5D860392DB3F.jpg">
								<span class="redDot"></span>
								<div class="lock" style="display:none;"></div>
							</div>我关注谁
						</a>
					</li>
					<li class="wkgs">
						<a href="javascript:;" id="myBHMyview">
							<div class="image">
								<img src="http://photo2.baihe.com/2016/12/07/100_100/B358F27B05301C67F4B1C541C940B787.jpg">
								<span class="redDot"></span>
								<div class="lock" style="display:none;"></div>
							</div>
							我看过谁
						</a>
					</li>
				</ul>
			</div> 

			<div class="space5"></div>

			<div class="navCont myService">
				<h6>
					我的服务
					<a href="javascript:;" class="arrow" id="myBHallservice">全部服务</a>
				</h6>
				<ul id="myService">
					<li class="gaoji">
						<a href="javascript:;"><em></em>高级会员</a>
					</li>
					<li class="shuijing">
						<a href="javascript:;"><em></em>水晶会员</a>
					</li>
					<li class="xqgaoding">
						<a href="http://static8.baihe.com/highCustom/index.html"><em></em>相亲高定版</a>
					</li>
				</ul>
			</div>

			<div class="space5"></div>

			<div class="infoCont">
				<ul>
					<li>
						<a href="javascript:;" id="myBHcoupon">
							我的优惠券
							<span>0</span>
						</a>
					</li>
					<li>
						<a href="javascript:;" id="myBHOrder">
							未支付订单
							<span>0</span>
						</a>
					</li>
				</ul>
			</div>

			<div class="space5"></div>

			<div class="navCont itemCont">
				<ul>
					<li class="bhcs">
						<a href="javascript:;" id="myBHMtwelve"><em></em>百合测试</a>
					</li>
					<li class="vipfw">
						<a href="javascript:;" id="myBHVIPservice"><em></em>VIP服务</a>
					</li>
					<li class="qbtzj">
						<a href="javascript:;" id="myBHcupid"><em></em>丘比特之箭</a>
					</li>
					<li class="mtbd">
						<a href="javascript:;" id="myBHmeitibaodao"><em></em>媒体报道</a>
					</li>
					<li class="xbj"><a href="javascript:;" id="myBHxiabanjian"><em></em>下班见</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{

	}
</script>

<style scoped type="text/css" lang="scss">
	.main-panel{
		padding-bottom: 50px;
		width: 100%;
		text-align: left!important;
		.myIndex2{
			.arrow {
			    float: right;
			    display: block;
			    padding-right: 14px;
			    font: 12px/12px microsoft yahei;
			    color: #aaa;
			    background: url(http://static5.baihe.com/images/newH5/arrowBg8.png) no-repeat right 1px;
			    background-size: 8px auto;
			}
			.userTCont{
				padding: 20px 15px 0;
				.pic{
					float: left;
					margin-right: 12px;
					img{
						display: block;
					    width: 72px;
					    height: 72px;
					    border-radius: 100%;
					}
				}
				.txt{
					float:left;
					h5{
						padding: 5px 0 10px;
					    font: 16px/16px microsoft yahei;
					    letter-spacing: -0.4px;
					    color: #555;
					    margin: 0;
					    text-align: left;
					}
					p{
						padding-top: 10px;
					    font: 14px/14px microsoft yahei;
					    color: #666;
					    margin: 0;
					}
				}
				.icon{
					text-align: left!important;
					a{
						display: inline-block;
						margin-right: 4px;
						text-indent: -9999px;
					}
					.realName {
					    width: 24px;
					    height: 14px;
					    background: url(http://static5.baihe.com/images/newH5/icon_04.png) no-repeat;
					    background-size: 100% auto;
					}
					.mobile {
					    width: 14px;
					    height: 14px;
					    background: url(http://static5.baihe.com/images/newH5/icon_05.png) no-repeat;
					    background-size: 100% auto;
					}
				}
				.icon .myIndex2 .userTCont .icon .realName.myIndex2 .userTCont .icon .realName.gray {
				    background-position: 0 -14px;
				}
			}

			.photoCont {
			    width: 88%;
			    margin: 0 auto;
			    padding-left: 0;
			    white-space: nowrap;
			    overflow-x: auto;
			    overflow-y: hidden;
			    padding: 20px 15px 0;
			    ul li {
				    display: inline-block;
				    width: 60px;
				    height: 60px;
				    margin: 0 4px 0 0;
				    white-space: normal;
				    a {
					    display: block;
					}
					img {
					    display: block;
					    width: 60px;
					    height: 60px;
					    border-radius: 2px;
					}
				}
				ul li:last-child {
				    margin: 0;
				}
			}

			.navCont ul {
			    padding: 20px 0 15px;
			    overflow: hidden;
			    li {
				    float: left;
				    width: 25%;
				     a {
					    position: relative;
					    display: block;
					    font: 12px/12px microsoft yahei;
					    color: #666;
					    text-align: center;
					    em{
					    	display: block;
						    width: 40px;
						    height: 40px;
						    margin: 0 auto 8px;
						    background: url(http://static5.baihe.com/images/newH5/icon_06.png) no-repeat;
						    background-size: 100% auto;
					    }
					}
					.image {
					    position: relative;
					    width: 40px;
					    height: 40px;
					    margin: 0 auto 8px;
					    color: #666;
    					text-align: center;
    					img {
						    display: block;
						    width: 40px;
						    height: 40px;
						    border-radius: 100%;
						}
						.redDot {
						    position: absolute;
						    top: 0;
						    right: 0;
						    width: 8px;
						    height: 8px;
						    background: url(http://static5.baihe.com/images/newH5/icon_online.png) no-repeat;
						    background-size: 100% auto;
						}
					}
				}
				.sxhw a em {
				    background-position: 0 0;
				}
			}

			.space5 {
			    height: 5px;
			    background: #eee;
			}

			// 我的服务
			.myService {
			    padding: 0 0 1px;
			    h6{
			    	margin: 0 15px;
				    font: 15px/44px microsoft yahei;
				    color: #333;
				    border-bottom: 1px solid #eee;
				    a{
				    	margin: 16px 0 0 0;
				    }
			    }
			    ul li a em {
				    display: block;
				    width: 40px;
				    height: 40px;
				    margin: 0 auto 8px;
				    background: url(http://static5.baihe.com/images/newH5/icon_03.png) no-repeat;
				    background-size: 100% auto;
				}
				.gaoji a em {
				    background-position: 0 0;
				}
				.shuijing a em {
				    background-position: 0 -40px;
				}
				.xqgaoding a em {
				    background-position: 0 -160px;
				}
			}

			//服务信息
			.infoCont{
				overflow:hidden;
				 ul li {
				    float: left;
				    width: 49%;
				    height: 28px;
				    margin: 10px 0;
				    border-right: 1px solid #eee;
				    a {
					    display: block;
					    font: 12px/28px microsoft yahei;
					    color: #666;
					    text-align: center;
					    span {
						    padding-left: 25px;
						    color: #666;
						}
					}
				}
			}
			.myIndex2 .space5 {
			    height: 5px;
			    background: #eee;
			}
						//服务信息
			.itemCont ul {
			    padding: 14px 0 15px;
			    li {
				    float: left;
				    width: 33.3%;
				    margin-bottom: 25px;
				    a {
					    position: relative;
					    display: block;
					    font: 12px/12px microsoft yahei;
					    color: #666;
					    text-align: center;
					    em {
						    display: block;
						    width: 32px;
						    height: 32px;
						    margin: 0 auto 10px;
						    background: url(http://static5.baihe.com/images/newH5/icon_02.png) no-repeat;
						    background-size: 100% auto;
						}
					}
				}
				.bhcs a em {
				    background-position: 0 0;
				}
				.vipfw a em {
				    background-position: 0 -32px;
				}
				.qbtzj a em {
				    background-position: 0 -64px;
				}
				.mtbd a em {
				    background-position: 0 -96px;
				}
				.xbj a em {
				    background-position: 0 -128px;
				}
			}

		}
	}
</style>