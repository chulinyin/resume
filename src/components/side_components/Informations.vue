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
		margin-top: 60px;
		
		.title{
			margin-bottom: 20px;
			padding-bottom: 6px;
			border-bottom: 1px solid #fff;
		}
		
		.infor{
			height: 25px;
			display: flex;
			align-items: center;
			margin-top: 6px;

			.icon{
				width: 25px;
				height: 25px;
				margin-right: 10px;
			}
		}
	}

</style>