<template>
	<div class="counter">
		<h2 class="counter__title">Осталось всего:</h2>
		<ul class="counter__list">
			<li class="counter__item" :class="classCrispa">
				<h3 class="counter__item-title">Crispa</h3>
				<p :class="{ counter__amount: true, zoom: isLoading }">{{ plants.crispa }}</p>
			</li>
			<li class="counter__item" :class="classFoetida">
				<h3 class="counter__item-title">Foetida</h3>
				<p :class="{ counter__amount: true, zoom: isLoading }">{{ plants.foetida }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "Counter",
	data() {
		return {
			plants: {},
			isLoading: true,
		};
	},
	created() {
		this.get();
	},
	computed: {
		...mapGetters(["plants"]),
		classCrispa() {
			return { few: this.plants.crispa <= 3, average: this.plants.crispa <= 6 && this.plants.crispa > 3 };
		},
		classFoetida() {
			return { few: this.plants.foetida <= 3, average: this.plants.foetida <= 6 && this.plants.foetida > 3 };
		},
	},
	methods: {
		async get() {
			this.isLoading = true;
			try {
				await this.$store.dispatch("get");
			} catch (error) {
				console.log(error);
			}
			this.plants = this.$store.getters.plants;
			this.isLoading = !this.isLoading;
		},
	},
};
</script>

<style scoped lang="scss">
.counter {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	max-width: 740px;
	padding: 20px;
}

.counter__title {
	margin: 0 0 20px;
	font-size: 20px;
}

.counter__list {
	list-style-type: none;
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: center;
	gap: 20px;
}

.counter__item {
	margin: 0;
	padding: 20px;
	color: $dark;
	text-align: center;
	border: 5px solid $medium;
	border-radius: 8px;
	min-height: 113px;
	animation: shake 1.4s infinite;

	&:last-child {
		animation-delay: 0.7s;
	}

	&.few {
		border-color: $few;

		.counter__amount {
			color: $few;
		}
	}

	&.average {
		border-color: $warning;

		.counter__amount {
			color: $warning;
		}
	}
}

.counter__item-title {
	margin: 0 0 5px;
	text-transform: uppercase;
}

.counter__amount {
	margin: 0;
	font-size: 30px;
	font-weight: 700;
	color: $medium;
	transition: $tr;
}

.zoom {
	transform: scale(0.8);
	color: $medium;
}
@keyframes shake {
	0% {
		-webkit-transform: translate(2px, 1px) rotate(0deg);
	}
	10% {
		-webkit-transform: translate(-1px, -2px) rotate(-2deg);
	}
	20% {
		-webkit-transform: translate(-3px, 0px) rotate(3deg);
	}
	30% {
		-webkit-transform: translate(0px, 2px) rotate(0deg);
	}
	40% {
		-webkit-transform: translate(1px, -1px) rotate(1deg);
	}
	50% {
		-webkit-transform: translate(-1px, 2px) rotate(-1deg);
	}
	60% {
		-webkit-transform: translate(-3px, 1px) rotate(0deg);
	}
	70% {
		-webkit-transform: translate(2px, 1px) rotate(-2deg);
	}
	80% {
		-webkit-transform: translate(-1px, -1px) rotate(4deg);
	}
	90% {
		-webkit-transform: translate(2px, 2px) rotate(0deg);
	}
	100% {
		-webkit-transform: translate(1px, -2px) rotate(-1deg);
	}
}
</style>
