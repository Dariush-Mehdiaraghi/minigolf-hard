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
		background: rgb(42, 180, 116);
		display: grid;
		place-items: center;
	}
</style>
