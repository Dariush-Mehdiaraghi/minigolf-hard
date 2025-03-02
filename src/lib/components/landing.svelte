<script>
	import Logo from './logo.svelte';
	import RealtimeIsItOpenNow from './realtimeIsItOpenNow.svelte';
</script>

<section id="landing">
	<Logo />
	<RealtimeIsItOpenNow />
</section>

<style lang="scss" scoped>
	#landing {
		/* height: 100vh; */
		position: relative;
		min-height: 400px;
		background: var(--green-main);
		display: grid;
		place-items: center;
	}
</style>
