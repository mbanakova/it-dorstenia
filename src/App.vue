<template>
	<TheNav />
	<router-view v-slot="slotProps">
		<transition name="route" mode="out-in"> <component :is="slotProps.Component"> </component> </transition
	></router-view>
</template>

<script>
import TheNav from "@/components/TheNav.vue";
export default {
	components: {
		TheNav,
	},
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

*,
*::before,
*::after {
	box-sizing: border-box;
}

html {
	font-family: "Roboto", sans-serif;
}

body {
	background-color: $dark;
	color: $white;
	background-image: url("~@/assets/banner.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	min-height: 100vh;
	position: relative;
	margin: 0;
	font-size: 16px;

	&::after {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
	}
}

#app {
	position: relative;
	z-index: 1;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
}

.container {
	margin: 0 auto;
	padding: 80px 20px 20px;
	max-width: 740px;
}

.warning {
	color: $warning;
}
</style>
