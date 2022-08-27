<template>
	<ul class="gallery container" v-if="hasGallery">
		<GalleryItem v-for="item in gallery" :key="item.id" :id="item.id" :title="item.title" :image="item.image" />
	</ul>
</template>

<script>
import GalleryItem from "@/components/GalleryItem";

import { mapGetters } from "vuex";
export default {
	name: "Gallery",
	components: { GalleryItem },
	computed: {
		...mapGetters(["gallery", "hasGallery"]),
	},
};
</script>

<style lang="scss" scoped>
.gallery {
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 30px;
}
</style>
