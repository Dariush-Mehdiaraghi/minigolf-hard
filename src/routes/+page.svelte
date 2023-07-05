<script>
	import About from '$lib/components/about.svelte';
	import Landing from '$lib/components/landing.svelte';
	import RealtimeIsItOpenNow from '$lib/components/realtimeIsItOpenNow.svelte';
	import SmallSections from '$lib/components/smallSections.svelte';
</script>

<svelte:head>
	<title>Minigolf Hard</title>
	<meta
		name="description"
		content="Auf der Hardgutbrache in Zürich entsteht bis im Sommer ein offenes und unkommerzielles Freizeitangebot. Genauer: ein Minigolfplatz mit viel Platz für Spontanes, Soziales und Kulturelles. Gemeinsam mit der Nachbarschaft, Kollektiven aus der Stadt und allen, die sich interessieren, entstehen die Bahnen aus recycelten Materialien."
	/>
</svelte:head>

<Landing />

<About />
<SmallSections />