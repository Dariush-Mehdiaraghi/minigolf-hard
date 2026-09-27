<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchIsOpenToday } from '$lib/utils/shiftPlan';
	import { language } from '$lib/stores/language';

	let isItOpen = false;
	let isLoaded = false;

	// Pages are prerendered, so the Schichtplan has to be read in the browser
	onMount(async () => {
		try {
			isItOpen = await fetchIsOpenToday();
			isLoaded = true;
		} catch (error) {
			console.error('Could not read the Schichtplan', error);
		}
	});
</script>

<section id="is-it-open-widget">
	{#if isLoaded}
		{#if isItOpen}
			<span>{$language === 'de' ? 'Heute ist die Mini Bar offen!' : 'The Mini Bar is open today!'}</span>
		{:else}
			<span>{$language === 'de' ? 'Heute keine Mini Bar' : 'The Mini Bar is closed today'}</span>
		{/if}
	{:else}
		<span id="loading"
			>{$language === 'de' ? 'Heute Mini Bar?' : 'Mini Bar open today?'}<span class="loader__dot">.</span><span class="loader__dot">.</span><span
				class="loader__dot">.</span
			></span
		>
	{/if}
</section>

<style lang="scss">
	#is-it-open-widget {
		width: 100%;
		display: grid;
		place-items: center;
		font-size: 2em;
		text-align: center;
		min-height: 2em;
		margin-bottom: 1em;
		> span {
			box-sizing: border-box;
			max-width: calc(100% - 2rem);
			padding: 0.25em 0.55em;
			border-radius: 32px;
			box-shadow: 0 1em 2em rgba(0, 0, 0, 0.3);
			background: white;
			line-height: 1.2;
		}
		#loading {
			@keyframes blink {
				50% {
					color: transparent;
				}
			}
			.loader__dot {
				animation: 1s blink infinite ease-in-out;
			}
			.loader__dot:nth-child(2) {
				animation-delay: 250ms;
			}
			.loader__dot:nth-child(3) {
				animation-delay: 500ms;
			}
		}
	}
</style>
