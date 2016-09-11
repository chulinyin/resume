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
		background-color: #ECF0F1 ;
	}

	/*let two columns have same height*/
	.resume{
		width: 690px;
		margin: 50px auto 100px auto;
		overflow: hidden;
		box-shadow: 0px 30px 60px 0px #D3DDE2;
		background-color: #fff;

		.main,.side{
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