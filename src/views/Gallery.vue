<template>
	<ul class="gallery container">
		<li class="gallery__item">
			<h4 class="gallery__item-title">в 5 месяцев</h4>
			<div class="gallery__img">
				<img src="../assets/g1.jpg" />
			</div>
		</li>
		<li class="gallery__item">
			<h4 class="gallery__item-title">в 2 недели</h4>
			<div class="gallery__img">
				<img src="../assets/g2.jpg" />
			</div>
		</li>
		<li class="gallery__item">
			<h4 class="gallery__item-title">в 2 недели</h4>
			<div class="gallery__img">
				<img src="../assets/g3.jpg" />
			</div>
		</li>
	</ul>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
	name: "Gallery",
	components: {},
};
</script>
<style lang="scss" scoped>
.gallery {
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.gallery__item {
	border: 2px solid $warning;
	padding: 10px;
	background-color: $dark;
}

.gallery__item-title {
	text-align: center;
	margin-bottom: 10px;
}
.gallery__img img {
	max-width: 100%;
	height: auto;
	display: block;
}
</style>
