<template>
	<div class="resume ">
		<side></side>
		<main></main>
	</div>
</template>

<script>
	import Side from './components/Side.vue'
	import Main from './components/Main.vue'
	export default {
	  components: {
	    Side,
	    Main
	  }
	}
</script>

<style lang='sass'>
	body{
		background-color: #ddd;
	}
	.resume{
		width: 690px;
		margin: 0 auto;
		background-color: #fff;
		overflow: hidden;

		.main{
			padding-bottom: 999px;
			margin-bottom: -999px;
		}
		.side{
			padding-bottom: 999px;
			margin-bottom: -999px;
		}
		.side{
			float: left;
		}
		.main{
			overflow: hidden;
		}
	}
</style>