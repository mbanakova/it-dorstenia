<template>
	<nav class="nav">
		<router-link to="/" class="button">Главная</router-link>
		<router-link to="/care" class="button">Уход</router-link>
		<router-link to="/gallery" class="button">Галерея</router-link>
	</nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["getNotifications"]),
	},
};
</script>
<style lang="scss" scoped>
.nav {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	background-color: $dark;
	padding: 10px;
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
}

.button {
	color: $bright;
	text-decoration: none;
	position: relative;
	padding: 10px;
	text-decoration: none;

	&::after {
		position: absolute;
		content: "";
		bottom: 4px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 2px;
		background-color: $bright;

		transition: 0.3s ease-in-out all;
	}
}

.router-link-active.router-link-exact-active::after {
	width: 80%;
}

.button--notify {
	position: relative;

	& span {
		position: absolute;
		content: "";
		top: -10px;
		right: -10px;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		color: $white;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		line-height: 12px;
	}
}
</style>
