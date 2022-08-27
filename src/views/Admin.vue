<template>
	<div class="admin container">
		<form class="form" @submit.prevent="sync">
			<div class="inputs">
				<input class="input" type="number" v-model.number="plants.crispa" />
				<input class="input" type="number" v-model.number="plants.foetida" />
			</div>
			<button class="button" type="submit" @click="set">set <font-awesome icon="sync" /></button>
		</form>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "Gallery",
	data() {
		return {
			plants: {
				// crispa: 0,
				// foetida: 0,
			},
		};
	},
	computed: {
		...mapGetters(["plants"]),
	},
	created() {
		this.plants = this.$store.getters.plants;
		this.get();
	},
	methods: {
		async set() {
			const syncData = this.plants;

			try {
				await this.$store.dispatch("set", syncData);
				// this.$router.replace("/");
			} catch (error) {
				console.log(error.message);
			}
		},

		async get() {
			try {
				await this.$store.dispatch("get");
			} catch (error) {
				console.log(error);
			}
			this.plants = this.$store.getters.plants;
		},
	},
};
</script>

<style lang="scss" scoped>
.admin {
	background-color: $medium;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
}

.inputs {
	display: flex;
	justify-content: center;
	gap: 20px;
}
.input {
	padding: 20px;
	text-align: center;
	border: 4px solid $bright;
	border-radius: 8px;
	font-size: 26px;
	max-width: 100px;
	outline: none;
	&:focus {
		border-color: $warning;
	}
}
.button {
	background-color: $warning;
	border: none;
	border-radius: 8px;
	padding: 10px 25px;
	font-weight: 700;
	font-size: 20px;
	transition: $tr;
	min-width: 200px;
	color: $dark;

	&:active {
		background-color: darken($warning, 10%);
	}
}
</style>
