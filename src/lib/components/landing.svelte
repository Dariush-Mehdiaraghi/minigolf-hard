<script>
	import Logo from './logo.svelte';
	import RealtimeIsItOpenNow from './realtimeIsItOpenNow.svelte';
	import SpecialAction from './specialAction.svelte';
</script>

<section id="landing">
	<SpecialAction
		url="https://drive.google.com/file/d/1IjqE2UJIIAPuqy_c3jonTPCaiGdsN6aa/view"
		label="Open Call für Bahnen 2024"
	/>
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
