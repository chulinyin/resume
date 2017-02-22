<template>
	<div class="schoolExps">
		<h1 class="title fs14 bold">{{ schoolExperiences.title }}</h1>
		<ul>
			<li class="" v-for="exp in schoolExperiences.experiences">
				<h2 class="itemTitle fs12 bold">{{ exp.title }}</h2>
				<ul>
					<li class="description fs12" v-for="desp in exp.descriptions">
						{{ desp.description }}
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>


<script>
	export default{
		props:{
			schoolExperiences:{
				type: Object,
				required: true
			}			
		}
	}
</script>


<style lang='scss' scoped>
	.schoolExps{
		margin: 22px 0;
	}
</style>