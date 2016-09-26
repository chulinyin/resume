<template>
	<background-canvas></background-canvas>
	<div class="resume ">
		<side></side>
		<main></main>
	</div>
</template>

<script>
	import Side from './components/Side.vue'
	import Main from './components/Main.vue'
	import BackgroundCanvas from './components/BackgroundCanvas.vue'
	export default {
	  components: {
	    Side,
	    Main,
	    BackgroundCanvas
	  }
	}
</script>

<style lang='sass'>
	body{
		padding: 1.45rem 0;
		background-color: #ECF0F1;
	}

	/*let two columns have same height*/
	.resume{
		width: 10.0rem;
		margin: 0 auto;
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

	@media screen and(max-width: 640px) {
		body{
			padding: 0;

			.resume{
				width: 10rem;
				padding: 0.14rem 0.29rem;

				.side{
					display: none;
				}
			}
		}
	}
	@media screen and(max-width: 1280px) {
		[data-dpr="2"] body{
			padding: 0;

			.resume{
				width: 10rem;
				padding: 0.14rem 0.29rem;
				
				.side{
					display: none;
				}
			}
		}
	}
	@media screen and(max-width: 1920px) {
		[data-dpr="3"] body{
			padding: 0;

			.resume{
				width: 10rem;
				padding: 0.14rem 0.29rem;
				
				.side{
					display: none;
				}
			}
		}
	}  
</style>