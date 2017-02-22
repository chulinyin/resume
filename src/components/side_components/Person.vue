<template>
	<div class="person">
		<h1 class="name fs24">{{ person.name }}</h1>
		<p class="job fs14">求职目标：{{ person.job }}</p>
	</div>
</template>

<script>
	export default {
		props: {
			person:{
				type: Object,
				required: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.person{
		margin-top: 0.57rem;
		
		.job{
			margin-top: 0.26rem; 
		}
	}
</style>