<template>
	<div class="guide" v-on:click='rotate180'>
		<svg v-bind:class="{ 'rotate180': isRotate }" version="1.1"
		 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
		 x="0px" y="0px"width="100%" height="100%" viewBox="0 0 42.7 42.7" enable-background="new 0 0 42.7 42.7"
		 xml:space="preserve">
			<defs>
			</defs>
			<g opacity="1">
				<path fill-rule="evenodd" clip-rule="evenodd" fill="rgb(216,223,224 )" d="M21.4,42.7C9.6,42.7,0,33.2,0,21.4C0,9.6,9.6,0,21.4,0
					c11.8,0,21.4,9.6,21.4,21.4C42.7,33.2,33.2,42.7,21.4,42.7z M26.6,15.3c1.4-1.4,1.4-3.7,0-5.1c-1.4-1.4-3.7-1.4-5.1,0l-8.6,8.7
					c-1.4,1.4-1.4,3.7,0,5l8.6,8.7c0.7,0.7,1.6,1.1,2.5,1.1c0.9,0,1.8-0.3,2.5-1c1.4-1.4,1.4-3.7,0-5.1l-6.1-6.1L26.6,15.3z"/>
			</g>
		</svg>			
	</div>
</template>

<script>
	export default{
    data () {
      return {
      	// 判断是否需要旋转180
      	isRotate: false
      };
    },
		methods: {
			rotate180: function(){
				this.isRotate = !this.isRotate;
				 // 使父组件根据isRotate判断是否需要显示Side组件 
				this.$emit('guide-rotate', this.isRotate);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.guide{
		display: inline-block;
		position: fixed;
		top: 2%;
		left: 1.5%;
		z-index: 999;
		width:0.42rem;
		height: 0.42rem;
		font-size: 0;
		animation: move 1s ease .5s 2 both;
	}

	.rotate180{
		transform: rotate(180deg);
	}

	@keyframes move{
		from{
			opacity: 0;
			transform: scale(1.5);
			left: 10%;
		}
		to{
			opacity:1;
			transform: scale(1);
			left: 1.5%;
		}
	}
</style>