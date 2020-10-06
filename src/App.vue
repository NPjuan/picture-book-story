<template>
  <div id="app">
	  <div class="container">
		  <transition name="fade" mode="out-in">
			  <component :is="gallery[selected]"></component>
		  </transition>
	  </div>
	  <div class="underground"></div>
  </div>
</template>


<script>
	import entry from '@/components/entry'
	import enNingCoffee from "@/components/gallery/enNingCoffee";
	import hotPot from "@/components/gallery/hotPot";
	import oldWareHouse from "@/components/gallery/oldWareHouse";
	import roastMeat from "@/components/gallery/roastMeat";
	import sugarWater from "@/components/gallery/sugarWater";
	import { mapState } from 'vuex'
  export default {
 	  name: 'app',
	  components: {
		  entry,
		  enNingCoffee,
		  hotPot,
		  oldWareHouse,
		  roastMeat,
		  sugarWater
	  },
	  data() {
 	  	return {
	    }
	  },
	  computed: mapState({
		  gallery: state => state.gallery,
		  selected: state => state.selected
	  })
  }
</script>
<style lang="scss">
	#app {
		position: relative;
	  font-family: Avenir, Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #273849;
		.underground{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: -1;
			background-image: url("./assets/image/background.png");
			background-size: 100% 100%;
			background-repeat: no-repeat;
			filter: blur(20px);
		}
		.container{
			width: 1400px;
			min-width: 1400px;
			height: 700px;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
			opacity: .75;
			transition: all .5s ease;
			background-color: white;
			overflow: hidden;
			&:hover{
				opacity: 1;
				box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
			}
		}
	}
	.fade-enter-active, .fade-leave-active {
		transition-property:transform , opacity; transition-duration:.5s , .25s;
	}
	.fade-enter, /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
	.fade-leave-to{
		transform: translate3d(-150%, 0, 0);
		opacity: 0;
	}
</style>
