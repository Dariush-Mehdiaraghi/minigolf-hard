<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchIsOpenToday } from '$lib/utils/shiftPlan';

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
			<span>Heute ist die Mini Bar offen!</span>
		{:else}
			<span>Heute keine Mini Bar</span>
		{/if}
	{:else}
		<span id="loading"
			>Heute Mini Bar?<span class="loader__dot">.</span><span class="loader__dot">.</span><span
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
