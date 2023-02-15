<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Minigolf aber Hard ⛳️</h1>
	<div id="opencall">
		<p>Big things comin..
		</p>
		<img src="https://media.tenor.com/-FZ2FAIUjt0AAAAS/fancy-dog-fancy.gif" alt="gif" width="300" height="300">

	</div>

</section>

<style scoped>
	h1{
		font-size: 1.5em;
		text-align: center;

	}
#opencall{
		text-align: center;
	}
</style>
