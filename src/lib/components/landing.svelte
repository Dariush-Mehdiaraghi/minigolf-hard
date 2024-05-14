<script>
	import Logo from './logo.svelte';
	import RealtimeIsItOpenNow from './realtimeIsItOpenNow.svelte';
	import SpecialAction from './specialAction.svelte';
</script>

<section id="landing">
	<SpecialAction url="https://www.instagram.com/p/C66cIJCK3vt/" label="Sommerfest am 8. Juni" />
	<Logo />
	<RealtimeIsItOpenNow />
</section>

<style lang="scss" scoped>
	#landing {
		/* height: 100vh; */
		position: relative;
		min-height: 400px;
		background: rgb(42, 180, 116);
		display: grid;
		place-items: center;
	}
</style>
