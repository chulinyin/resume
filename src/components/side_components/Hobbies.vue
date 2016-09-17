<template>
	<div class="hobbies">
		<h1 class="title fs14 bold">兴趣爱好</h1>
		<ul>
			<li class="hobby" v-for="hobby in hobbies">
				<img class="icon" :src="hobby.icon"></img><span class="description fs12">{{ hobby.hobby }}</span>
			</li>
		</ul>
</template>


<script>

export default {
	props: {
		hobbies:{
			type: Array,
			required: true
		}
	}
}

</script>


<style lang="sass" scoped>

	.hobbies{
		margin-top: 0.87rem;
		
		.title{
			margin-bottom: 0.29rem;
			padding-bottom: 0.09rem;
			border-bottom: 0.01rem solid #fff;
		}
		ul{
			display: flex;
			justify-content: space-between;
		}
		.hobby{
			display: flex;
			flex-direction: column;
	
			.icon{
				width: 0.36rem;
				height: 0.36rem;
				margin-bottom: 0.26rem;
			}
		}
	}

</style>