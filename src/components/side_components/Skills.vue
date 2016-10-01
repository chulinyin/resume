<template>
	<div class="skills">
		<h1 class="title fs14 bold">专业技能</h1>
		<ul>
			<li class="skill" v-for="skill in skills">
				<h2 class="fs12 bold">{{ skill.name }}</h2>
				<div>
					<p :style="{width: skill.level+'%'}"></p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>

	export default{
		props:{
			skills:{
				type: Array,
				required: true
			}			
		}
	}
</script>
<style lang='sass' scoped>

	.skills{
		margin-top: 0.87rem;
		
		.title{
			margin-bottom: 0.29rem;
			padding-bottom: 0.09rem;
			border-bottom: 1px solid #fff;
		}

		.skill{

			div{
				width: 100%;
				height: 0.12rem;
				margin-top: 0.07rem;
				margin-bottom: 0.19rem;
				background-color: #fff;
				
				p{
					height: 100%;
					background-color: #becdd5;
				}
			}		
		}

	} 

</style>