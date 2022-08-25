<template>
	<div class="counter">
		<h2 class="counter__title">Осталось всего:</h2>
		<ul class="counter__list">
			<li class="counter__item" :class="fewCrispa">
				<h3 class="counter__item-title">Crispa</h3>
				<p class="counter__amount">{{ crispa }}</p>
			</li>
			<li class="counter__item" :class="fewFoetida">
				<h3 class="counter__item-title">Foetida</h3>
				<p class="counter__amount">{{ foetida }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "Counter",
	data() {},
	computed: {
		...mapGetters(["crispa", "foetida"]),
		fewCrispa() {
			return { few: this.crispa <= 5 };
		},
		fewFoetida() {
			return { few: this.foetida <= 5 };
		},
	},
};
</script>

<style scoped lang="scss">
.counter {
	display: flex;
	flex-direction: column;
	align-items: center;
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
	background-color: rgba(255, 255, 255, 0.8);
	color: $dark;
	text-align: center;
	border: 5px solid $bright;
	border-radius: 8px;
	animation: shake 1.4s infinite;

	&:last-child {
		animation-delay: 0.7s;
	}

	&.few {
		border-color: red;

		.counter__amount {
			color: red;
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
	color: $bright;
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
