<template>
	<div class="personalIntros">
		<h1 class="title fs14 bold">{{ personalIntroductions.title }}</h1>
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


<style lang='scss' scoped>
	.personalIntros{
		margin: 0.32rem 0;
	}
</style>