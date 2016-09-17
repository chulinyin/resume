<template>
	<div class="eduBcgs">
		<h1 class="title fs14 bold">{{ educationBackgrounds.title }}</h1>
		<ul>
			<li class="schoolExp" v-for="eduBcg in educationBackgrounds.backgrounds">
				<h2  class="itemTitle fs12 bold">{{ eduBcg.title }}</h2>
				<ul>
					<li class="description fs12" v-for="desp in eduBcg.descriptions">
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
			educationBackgrounds:{
				type: Object,
				required: true
			}			
		}
	}
</script>


<style lang='sass' scoped>	
	.eduBcgs{
		margin: 0.32rem 0;
	}
</style>