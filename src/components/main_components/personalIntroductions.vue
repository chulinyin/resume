<template>
	<div class="personalIntros">
		<h1 class="title fs14">{{ personalIntroductions.title }}</h1>
		<ul>
			<li class="description fs12" v-for="intro in personalIntroductions.introductions">
				{{ intro.description }}
			</li>
		</ul>
	</div>
</template>
<script>

	export default{
		props:{
			personalIntroductions:{
				type: Object,
				required: true
			}			
		}
	}
</script>
<style lang='sass' scoped>
	.personalIntros{
		margin-top: 22px;
		margin-bottom: 30px;
		
		.title{
			margin-bottom: 15px;
			padding-bottom: 6px;
			border-bottom: 1px solid #a6c02a;
		}
	}
</style>