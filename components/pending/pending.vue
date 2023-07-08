<template>
	<view>
		<view class="uni-margin-wrap">
			<view class="pending">暂未开发此页面</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"pending",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.uni-margin-wrap {
	width: 690rpx;
	width: 100%;
	.pending {
		position: absolute;
		top: 0; bottom: 0; left: 0; right: 0;
		/* 1.内容左上角居中 */
		top: 50%; left: 50%;
		/* 2.负半宽高把内容挪回来 */
		-webkit-transform: translate(-50%, -50%);
	}
}
</style>