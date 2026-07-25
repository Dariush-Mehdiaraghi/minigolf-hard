<script>
	import './global.css';

	let { children } = $props();
</script>

<main>
	{@render children()}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
</style>
