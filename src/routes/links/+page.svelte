<script>
	import content from '$lib/content/content';
	const linksPage = content.linksPage;
</script>

<svelte:head>
	<title>Minigolf Hard Links</title>
	<meta name="description" content="Links für Minigolf Hard" />
</svelte:head>

<main id="link-page">
	<h1>{linksPage.title}</h1>
	{#each linksPage.links as link}
		<a
			id={link.url.includes('forms.gle/') ? 'concours' : ''}
			href={link.url}
			target="_blank"
			rel="noopener noreferrer"
		>
			{link.title}
		</a>
	{/each}
</main>

<style lang="scss" scoped>
	h1{
		font-size: 3em;
	}
	#link-page {
		display: grid;
		place-items: center;
		padding: 2em;
		text-align: center;
		height: 100%;
		background-color: var(--green-main);
		a {
			font-size: 2em;
			padding: 1em;
			background: black;
			color: white;
			border-radius: 2em;
			line-height: 1em;
			padding: 0.8em 1.2em;
			&:hover {
				outline: 4px solid var(--pink-main);
			}
		}
		#concours {
			background: var(--yellow-main);
			color: black;
			animation: pulse 2s infinite ease-in-out;
			@keyframes pulse {
				0% {
					transform: scale(1);
					outline: 0px solid transparent;
				}
				50% {
					transform: scale(1.05);
					outline: 4px solid var(--pink-main);
				}
				100% {
					transform: scale(1);
					outline: 0px solid transparent;

				}
			}
		}
	}
</style>
