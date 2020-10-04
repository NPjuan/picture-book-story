<template>
  <div id="app">
	  <div class="container">
		  <component :is="$store.state.gallery[$store.state.selected]"></component>
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
	  }
  }
</script>
<style lang="scss">

	#app {
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
			background-size: cover;
			background-repeat: no-repeat;
			filter: blur(20px);
		}
		.container{
			width: 1400px;
			height: 700px;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
			opacity: .75;
			transition: all .5s ease;
			background-color: white;
			&:hover{
				opacity: 1;
				box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
			}
		}
	}
</style>
