<template>
	<view>
		<swiper circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="url in swiper_urls">
				<view class="swiper-item">
					<image :src="url"> </image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				swiper_urls: {
					
				},
			};
		},
		onLoad() {
			this.$av.read('Images').then((e)=>{
				this.swiper_urls = e.map((e)=>e.attributes.image.attributes.url);
				console.log(this.swiper_urls);
			})
			
		}
	}
</script>

<style lang="scss">
swiper{
  height: 330rpx;
  // ,并集选择器
 .swiper-item,
 image {
   width: 100%;
   height: 100%;
 }
}
</style>

