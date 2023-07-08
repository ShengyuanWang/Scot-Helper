<template>
<view>
	<view class="uni-margin-wrap">
		<swiper circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="url in swiper_urls">
				<view class="swiper-item">
					<image :src="url"> </image>
				</view>
			</swiper-item>
		</swiper>
	</view>
	
	<view class="uni-margin-wrap">
		<view class="box">
			<view v-for="item in grids" class="flex-item" @click="handleClick(item)">
				<image :src=item.link mode="aspectFit"></image>
				<view class="describe">{{item.name}}</view>
			</view>
		</view>
	</view>
	<view class="uni-margin-wrap">
		<view class="intro-box">
			<view class="intro-item" @click="cccIntro()">
				<view class="text">
					<view><text style="color: black;font-size: 27rpx;">学生会</text> <br> <text style="color: grey;font-size: 20rpx;">简介以及成员</text></view>
				</view>
				<view class="pic"></view>
				
			</view>
			<view class="intro-item" @click="campusIntro()">
				<view class="text">
					<view><text style="color: black;font-size: 27rpx;">学校</text> <br> <text style="color: grey;font-size: 20rpx;">学校概况</text></view>
				</view>
				<view class="pic"></view>
				
			</view>
		</view>
		
	</view>
	<view><text>校园动态</text></view>
	<view class="uni-margin-wrap">
		<infoBox v-for="post in posts" :key="post" :time="post.time" :name="post.name"></infoBox>
	</view>

</view>
</template>

<script>
import infoBoxVue from '../../components/infoBox/infoBox.vue';
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				grids: {
					trade:{
						name: '二手闲置',
						link: '/static/icons/grids/trade.png',
						url: '/pages/index/secondHand/secondHand'
					},
					apartment:{
						name: '租房信息',
						link: '/static/icons/grids/apartment.png',
						url: '/pages/index/rent/rent'
					},
					topics:{
						name: '话题讨论',
						link: '/static/icons/grids/topics.png',
						url: '/pages/index/topics/topics'
					},
					booklet:{
						name: '新生手册',
						link: '/static/icons/grids/booklet.png',
						url: '/pages/index/guideBook/guideBook'
					},
					groupchat:{
						name: '官方社群',
						link: '/static/icons/grids/group-chat.png',
						url: '/pages/index/groupChat/groupChat'
					},
					plane:{
						name: '新生接机',
						link: '/static/icons/grids/plane.png',
						url: '/pages/index/pickup/pickup'
					},
					location:{
						name: '校园周边',
						link: '/static/icons/grids/location.png',
						url: '/pages/index/campus/campus'
					},
					coins:{
						name: '开发团队',
						link: '/static/icons/grids/coins.png',
						url: '/pages/index/about/about'
					}
					
				},
				posts: {
					post1: {
						time: "10-" + "23",
						name: "我是负责人Alan, 我为大家演唱爱如火！心在跳是爱情如烈火，你在笑疯狂的人是我",
					}, 
					post2: {
						time: "2023",
						name: "alan",
					}
				},
				swiper_urls: {
					
				},
			}
		},
		onLoad() {
			this.$av.read('Images').then((e)=>{
				this.swiper_urls = e.map((e)=>e.attributes.image.attributes.url);
				console.log(swiper_urls);
			})

		},
		methods: {
			handleClick: function(item){
				console.log(item);
				uni.navigateTo({
					url: item.url
				})
			},
			cccIntro: function() {
				uni.navigateTo({
					url:'/pages/index/cccInfo/cccInfo'
				})
			},
			campusIntro: function() {
				uni.navigateTo({
					url:'/pages/index/campus/campus'
				})
			}

		}
	}
</script>

<style lang="scss">
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
		.box {
			background-color: aqua;
			margin-top: 10px;
			border-radius: 10rpx;
			margin-left: 20rpx;
			margin-right: 20rpx;
			height: 250rpx;
			image{
				width: 20px;
				height: 20px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -80%);
			}
		}
		.intro-box {
			
			background-color: lightcyan;
			height: 150rpx;
			margin-top: 20rpx;
			margin-left: 20rpx;
			margin-right: 20rpx;
			border-radius: 5px;
			display: flex;
			position: relative;
			.intro-item{
				width: 50%;
				padding: 10rpx;
				display: flex;
				text-align: left;
				.text{
					width: 45%;
					padding: 10px;
				}
				.pic {
					width: 60%;
					height: 100%;
					background-color: purple;
					
				}
				
			}
			
			
		}
		swiper {
			height: 350rpx;
			.swiper-item,
			image {
				width: 100%;
				height:100%;
				border-radius: 10rpx;
			}
			margin-left: 20rpx;
			margin-right: 20rpx;
			
		}
	}
	
	
	

	.flex-item {
		float: left;
		width: 22%;
		margin: 10rpx;
		height: 100rpx;
		position: relative;
		background-color: aquamarine;
		border-radius: 5px;
		.describe {
			display: inline-block;
			width: 100%;
			bottom: 5px;
			position: absolute;
			align-items: center;
			text-align: center;
		}
		view {
			line-height: 100%;
			display: inline-block;
			vertical-align: middle;
			text-align: center;
			font-size: 20rpx;
		}
		
	}



	
</style>
