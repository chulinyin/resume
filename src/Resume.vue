<template>
	<background-canvas></background-canvas>
	<div id="resume">
		<guide @guide-rotate="ctrlSide"></guide>
		<side v-show="condition" transition="slide"></side>
		<main></main>
	</div>
</template>

<script>
	import Guide from './components/Guide.vue'
	import Side from './components/Side.vue'
	import Main from './components/Main.vue'
	import BackgroundCanvas from './components/BackgroundCanvas.vue'
	export default {
	  components: {
	  	Guide,
	    Side,
	    Main,
	    BackgroundCanvas
	  },
		data () {
			return {
				condition: true
			}
		},
	  methods: {
	    ctrlSide: function(isRotate) {
	    		this.condition = !isRotate;
	    }
	  }
	}
</script>

<style lang='sass'>
	body{
		padding: 1.45rem 0;
		background-color: #ecf0f1;
	}
	/* 两列等高 */
	#resume{
		width: 10.0rem;
		margin: 0 auto;
		overflow: hidden;
		box-shadow: 0 0.43rem 0.87rem 0 #d3dde2;
		background-color: #fff;

 		.guide{
			display: none;
		} 

		.main, .side{
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

/* 响应式 */
	@media screen and(max-width: 640px) {
		body{
			padding: 0;

			.canvas{
				display: none;
			}

			#resume{
				width: 10rem;
				padding: 0.14rem 0.29rem;

		 		.guide{
					display: inline-block;
				} 

				.side{
					position: fixed;
					top: 0;
					z-index: 600;
					left: 0px;
					width: 190px;
					box-shadow: 0.1rem 0rem 0.6rem 0rem #9daeb2; 
				}
				/* Side组件出现消失的过渡效果 */
				.slide-transition {
				  transition: all .3s ease-in;
				}
				.slide-enter, .slide-leave{
					left:-200px;
				}
			}
		}


	}
	@media screen and(max-width: 1280px) {
		[data-dpr="2"] body{
			padding: 0;

			.canvas{
				display: none;
			}

			#resume{
				width: 10rem;
				padding: 0.14rem 0.29rem;

		 		.guide{
					display: inline-block;
				} 

				.side{
					position: fixed;
					top: 0;
					z-index: 600;
					left: 0px;
					width: 370px;
					box-shadow: 0.1rem 0rem 0.6rem 0rem #9daeb2; 
				}
				/* Side组件出现消失的过渡效果 */
				.slide-transition {
				  transition: all .3s ease-in;
				}
				.slide-enter, .slide-leave{
					left:-380px;
				}
			}
		}

	}
	@media screen and(max-width: 1920px) {
		[data-dpr="3"] body{
			padding: 0;

			.canvas{
				display: none;
			}

			#resume{
				width: 10rem;
				padding: 0.14rem 0.29rem;

		 		.guide{
					display: inline-block;
				} 

				.side{
					position: fixed;
					top: 0;
					z-index: 600;
					left: 0px;
					width: 570px;
					box-shadow: 0.1rem 0rem 0.6rem 0rem #9daeb2; 
				}
				/* Side组件出现消失的过渡效果 */
				.slide-transition {
				  transition: all .3s ease-in;
				}
				.slide-enter, .slide-leave{
					left:-580px;
				}
			}
		}

	}  
</style>