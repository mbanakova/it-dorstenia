<template>
	<li class="gallery__item">
		<div class="spinner" v-if="isLoading">
			<BaseSpinner />
		</div>
		<h4 class="gallery__item-title">{{ title }}</h4>
		<div class="gallery__img"><img :src="image" @load="showImage" alt="дорстения" /></div>
	</li>
</template>

<script>
import BaseSpinner from "@/components/BaseSpinner";

export default {
	props: ["id", "title", "image"],
	components: { BaseSpinner },
	data() {
		return {
			isLoading: true,
		};
	},
	methods: {
		showImage() {
			this.isLoading = !this.isLoading;
		},
	},
};
</script>

<style lang="scss" scoped>
.gallery__item {
	box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	position: relative;
	padding: 10px;
	min-height: 200px;
	min-width: 300px;
}

.spinner {
	position: absolute;
	content: "";
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
}
.gallery__item-title {
	color: $black;
	font-size: 12px;
	padding: 10px 20px;
	border-radius: 10px;
	top: -8px;
	left: 20px;
	right: 20px;
	width: fit-content;
	max-width: calc(100% - 40px);
	position: absolute;
	z-index: 1;
	background-color: $bright;
}

.gallery__img {
	& img {
		max-width: 100%;
		height: auto;
		display: block;
		border-radius: 10px;
	}
}
</style>
