<script>
	import Logo from './logo.svelte';
	import RealtimeIsItOpenNow from './realtimeIsItOpenNow.svelte';
</script>

<section id="landing">
	<picture>
		<source
			media="(orientation: portrait)"
			srcset="/images/topdown-portrait-720.webp 720w, /images/topdown-portrait-1080.webp 1080w"
			sizes="100vw"
			width="1080"
			height="1920"
		/>
		<img
			class="hero-image"
			src="/images/topdown-1600.webp"
			srcset="/images/topdown-960.webp 960w, /images/topdown-1600.webp 1600w, /images/topdown-2560.webp 2560w"
			sizes="100vw"
			width="1600"
			height="900"
			fetchpriority="high"
			alt="Aerial view of the Minigolf Hard course"
		/>
	</picture>
	<Logo />
	<RealtimeIsItOpenNow />
</section>

<style scoped>
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
			object-position: center;
		}
	}
</style>
