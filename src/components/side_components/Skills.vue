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
		margin-top: 60px;
		
		.title{
			margin-bottom: 20px;
			padding-bottom: 6px;
			border-bottom: 1px solid #fff;
		}

		.skill{

			div{
				width: 188px;
				height: 8px;
				margin-top: 5px;
				margin-bottom: 13px;
				background-color: #fff;
				
				p{
					height: 100%;
					background-color: #cde266;
				}
			}		
		}

	} 

</style>