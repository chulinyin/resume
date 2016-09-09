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
		margin-top: 60px;
		
		.title{
			margin-bottom: 20px;
			padding-bottom: 6px;
			border-bottom: 1px solid #fff;
		}
		ul{
			display: flex;
			justify-content: space-between;
		}
		.hobby{
			display: flex;
			flex-direction: column;
	
			.icon{
				width: 25px;
				height: 25px;
				margin-bottom: 18px;
			}
		}
	}

</style>