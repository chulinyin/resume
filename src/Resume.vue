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
		width: 10.0rem;
		margin: 0.72rem auto 1.45rem auto;
		overflow: hidden;
		box-shadow: 0 0.43rem 0.87rem 0 #D3DDE2;
		background-color: #fff;

		.main,.side{
			padding-bottom: 14.48rem;
			margin-bottom: -14.48rem;
		}

		.side{
			float: left;
		}
		.main{
			overflow: hidden;
		}
	}
</style>