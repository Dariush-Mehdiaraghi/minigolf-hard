<script>
	import Logo from './logo.svelte';
	import RealtimeIsItOpenNow from './realtimeIsItOpenNow.svelte';
</script>

<section id="landing">
	<img
		class="hero-image"
		src="/images/Betrieb7_JaninaTanner.webp"
		alt="Visitors playing minigolf at Minigolf Hard"
	/>
	<Logo />
	<RealtimeIsItOpenNow />
</section>

<style lang="scss" scoped>
	#landing {
		position: relative;
		isolation: isolate;
		min-height: 80vh;
		min-height: 80svh;
		background: var(--green-main);
		display: grid;
		place-items: center;

		.hero-image {
			position: absolute;
			inset: 0;
			z-index: -2;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center 55%;
		}
	}
</style>
