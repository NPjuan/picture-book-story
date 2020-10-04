<template>
	<div class="map">
		<main>
			<point v-for="(item, index) in points" :detail="item" :index="index" :key="index"></point>
		</main>
		<aside>
			<h1>恩宁路美食</h1>
			<article>
				<p>曾经的恩宁路是“老字号一条街”，一路过去到处是老字号食店。</p>
				<p>十字路口。一间间门面小得只能摆一张桌子，耳边就是车马喧闹的老字号，却总是聚拢着街坊邻居，坐下来点一碟肠粉，谈谈生活琐事。尝一口，入口细腻嫩滑，丝般口感。</p>
				<p>随着时代的发展，现在的恩宁路美食街的发展更是多元化，除了当地的特色美食，还能感受到外来美食与恩宁路的文化相互融合。</p>
				<p>越过趟栊门，于满洲窗边小酌一杯咖啡，望着熙熙攘攘的人群走在麻石路的惬意，也不禁放缓了品尝寿喜烧的心态，于平和下渗入美食的深处。</p>
			</article>
			<footer>
				<img src="../assets/image/logo.png" alt="logo">
			</footer>
		</aside>
	</div>
</template>

<script>
	import point from "@/components/point";
	export default {
		name: "entry",
		components: {
			point
		},
		data() {
			return {
				points: [
					{
						name: 'roastMeat',
						label: '今崎烧寿喜烧专门店',
						left: '62%',
						top: '71%',
						thumbnail: require('../assets/image/Shinasaki/Shinasaki-1.png')
					},
					{
						name: 'enNingCoffee',
						label: '恩宁公啡',
						left: '33%',
						top: '55%',
						thumbnail: require('../assets/image/enNingCoffee/enNingCoffee-1.jpg')
					},
					{
						name: 'hotPot',
						label: '兄妹鸡煲火锅店',
						left: '17%',
						top: '47%',
						thumbnail: require('../assets/image/HotPot/HotPot-1.jpg')
					},
					{
						name: 'sugarWater',
						label: '粤掌门·广式糖水',
						left: '24%',
						top: '49%',
						thumbnail: require('../assets/image/SugarWater/SugarWater-1.png')
					},
					{
						name: 'oldWareHouse',
						label: '旧物仓·一桌广州',
						left: '14%',
						top: '31%',
						thumbnail: require('../assets/image/oldWareHouse/oldWareHouse-1.png')
					},]
			}
		}
	}
</script>

<style scoped lang="scss">
 .map{
	 height: 100%;
	 display: flex;
	 background-color: whitesmoke;
	 background-image: url("../assets/image/map.jpg");
	 background-size: contain;
	 background-repeat: no-repeat;
	 overflow: hidden;
	 &:hover{
		 h1, article{
			 transform: translateX(-100px);
		 }
	 }
	 main{
		 position: relative;
		 flex: 2;
		 display: flex;
		 justify-content: center;
		 align-items: center;
		 overflow: hidden;
		 img{
			 height: 100%;
		 }
	 }
	 aside{
		 flex: 1;
		 position: relative;
		 display: flex;
		 flex-direction: column;
		 justify-content: center;
		 align-items: center;
		 transition: all .5s ease;
		 background-color: rgba(246, 246,246, .3);
		 h1{
			 font-size: 2em;
			 font-weight: 600;
			 transition: all .5s ease;
		 }
		 article{
			 transition: all .5s ease;
			 padding: 30px 40px 100px;
			 p{
				 text-indent: 2em;
				 padding: 4px;
			 }
		 }
	 }
	 footer{
		 position: absolute;
		 right: 20px;
		 bottom: 10px;
		 height: 50px;
		 line-height: 1;
		 img{
			max-height: 100%;
		 }
	 }
 }
</style>