<template>
	<view class="uni-margin-wrap">
		<view class="box">
			Hey，我是王圣元（a.k.a. Alan, @小王同学），一个略懂计算机科学与Kpop的斜杆不动青年。现为 FIRAROBO@US 签约软件工程师。
			目前的物理活动范围主要在美帝纽约与我的第二个家明尼苏达，也想当个数字游侠。虚拟分身日常出没于
			<text @click="weibo">微博</text>、
			<text @click="zhihu">知乎</text> 、
			<text @click="bili">B 站</text>、
			<text @click="ins">Instagram</text>
		</view>
		<infoBox v-for="post in posts" :key="post" :time="post.time" :name="post.name" :url="post.url"></infoBox>
		<view class="box" @click=openDoc()>
			加入团队！！！</br>
			WX: Shengyuan_W0518 
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				posts: {
					post1: {
						time: "10-" + "23",
						name: "我是负责人Alan, 我为大家演唱爱如火！心在跳是爱情如烈火，你在笑疯狂的人是我",
					}, 
					post2: {
						time: "2023",
						name: "alan",
						url: "https://mp.weixin.qq.com/s/rM6UkmUluoNWs6fpvulokg"
					}, 
					
					
				}
				
			};
		},
		onLoad() {
			this.$av.read('posts').then((e)=>{
				console.log(e);
				console.log(e[0].attributes);
				this.posts.post1 = e[0].attributes;
			})
			console.log(this.posts.post2)
		},
		methods: {
			openDoc: function() {
				uni.openDocument({
				      filePath: './test.pdf',
				      showMenu: true,
				      success: function (res) {
				        console.log('打开文档成功');
				      }
				});
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
		font-size: 30rpx;
	}
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
}
</style>
