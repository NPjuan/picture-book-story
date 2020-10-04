<template>
	<div class="point" :style="{
		left: detail.left,
		top: detail.top
	}"
	@click="handleClick">
		<main>
			<div class="thumbnail" :style="{
				backgroundImage: `url(${detail.thumbnail})`
			}">
			</div>
		</main>
		<footer>
			{{ detail.label }}
		</footer>
	</div>
</template>

<script>
export default {
	name: "point",
	props: {
		detail: {
			type: Object,
			require
		},
		index: Number
	},
	methods: {
		handleClick() {
			console.log('aaa')
			this.$store.commit('select', this.detail.name)
		}
	}
}
</script>

<style scoped lang="scss">
 .point{
	 position: absolute;
	 width: 80px;
	 height: 120px;
	 display: flex;
	 flex-direction: column;
	 cursor: pointer;
	 &:hover{
		 main{
			 animation: active .5s alternate infinite running;
		 }
	 }
	 main{
		 transition: .5s all ease;
		 position: relative;
		 background-image: url("../assets/image/pointer.png");
		 background-repeat: no-repeat;
		 background-size: contain;
		 background-position: center;
		 display: flex;
		 justify-content: center;
		 height: 90px;
		 text-align: center;
		 padding-top: 15px;
		 padding-left: 2px;
		 div{
			 height: 50px;
			 width: 50px;
			 border-radius: 50%;
			 overflow: hidden;
			 background-size: cover;
			 background-repeat: no-repeat;
			 background-position: center;
		 }
	 }
	 footer{
		 position: absolute;
		 width: 100%;
		 top: 90px;
		 text-align: center;
		 font-size: 10px;
	 }
 }

 @keyframes active {
	 0%{
		 transform: translateY(0);
	 }
	 100%{
		 transform: translateY(-10px);
	 }
 }
</style>