<template>
	<view>
		<web-view :src="url"> </web-view>
	</view>
</template>

<script>
	export default {
		name:"gzhBox",
		props: {
			url: String
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>