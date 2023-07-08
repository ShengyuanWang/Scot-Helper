<template>
	<view class="info" @click="handleClick()">
		<view class="pic" ></view>
		<view class="text">
			<view class="name">{{ name }}</view>
			<view class="time">{{ time }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"infoBox",
		props:{
			name: String,
			time: String,
			url: String,
		},
		data() {
			return {
				
			};
		},
		methods: {
			handleClick: function() {
				// 跳转页面
				uni.navigateTo({
					url: this.$options.propsData.url
				})
			}
		}
	}
</script>

<style lang="scss">
.info {
	height: 250rpx;
	background-color: lightgoldenrodyellow;
	margin: 20rpx 20rpx 20rpx 20rpx;
	border-radius: 10rpx;
	display: flex;
	.pic {
		width: 35%;
		height: 70%;
		background-color: lightcoral;
		margin: 40rpx  20rpx;
		display: flex;
	}
	.text {
		width: 60%;
		height: 70%;
		background-color: lightblue;
		margin: 40rpx  20rpx;
		display: flexbox;
		.name {
			display: flex;
			font-size: 28rpx;
			width: 100%;
			height: 80%;
			background-color: $uni-bg-color;
			margin-bottom:10rpx;
		}
		.time {
			width: 100%;
			height: 20%;
			display: flex;
			font-size: 20rpx;
			color: grey;
		}
		
	}
}
</style>