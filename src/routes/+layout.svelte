<script>
	import './global.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
</style>
