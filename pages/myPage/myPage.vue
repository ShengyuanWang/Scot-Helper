<template>
	<view class="uni-margin-wrap">
		<view class="box">
			<view class="avatar">
				<image></image>
			</view>
			<view class="name"></view>
		</view>
		<view class="box"></view>
		<view class="box"></view>
		<view class="box"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:null
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
.uni-margin-wrap {
	width: 690rpx;
	width: 100%;
	.box{
		height: 200rpx;
		background-color: grey;
		margin:20rpx;
		border-radius: 10rpx;
		position: relative;
		display: flex;
		.avatar {
			height: 160rpx;
			width: 160rpx;
			margin: 20rpx;
			background-color: lightcyan;


		}
		.name {
			height: 160rpx;
			width: 340rpx;
			margin: 20rpx;
			background-color: lightgray;

		}
	}
	
}
</style>
