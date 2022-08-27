<template>
	<div>
		<div class="home">
			<div class="container">
				<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
				<h1 class="centered">Дорогие друзья!</h1>
				<p class="large">Если вы увлекаетесь необычными редкими растениями, а особенно суккулентами, приглашаем вас посетить комнату 615 (IT).</p>
				<p>У нас взошёл урожай дорстений, и нам некуда его девать в таком количестве...</p>
				<p>В наличии есть Dorstenia Crispa и Dorstenia Foetida</p>
				<h3 class="centered warning">Торопитесь!<br />На всех может не&nbsp;хватить!</h3>
			</div>
		</div>
		<Counter />
	</div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";

export default {
	name: "Home",

	components: {
		Counter,
	},
};
</script>

<style lang="scss" scoped>
.home {
	background-color: $medium;
	color: $white;
	padding: 20px 0 30px;
}
.container {
	display: flex;
	flex-direction: column;
	gap: 20px;
}
.large {
	font-size: 18px;
}
.centered {
	text-align: center;
}
</style>
