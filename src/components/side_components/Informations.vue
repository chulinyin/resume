<template>
	<div class="infors">
		<h1 class="title fs14 bold">个人信息</h1>
		<ul>
			<li class="infor" v-for="infor in infors">
				<img class="icon" :src="infor.icon"></img><span class="description fs12">{{ infor.description }}</span>
			</li>
		</ul>
</template>


<script>

	export default {
		props: {
			infors:{
				type: Array,
				required: true
			}
		}
	}

</script>


<style lang="sass" scoped>

	.infors{
		margin-top: 0.87rem;
		
		.title{
			margin-bottom: 0.29rem;
			padding-bottom: 0.09rem;
			border-bottom: 0.01rem solid #fff;
		}
		
		.infor{
			height: 0.36rem;
			display: flex;
			align-items: center;
			margin-top: 0.09rem;

			.icon{
				width: 0.36rem;
				height: 0.36rem;
				margin-right: 0.14rem;
			}
		}
	}

</style>