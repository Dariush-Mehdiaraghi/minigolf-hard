<script lang="ts">
	import PublicGoogleSheetsParser from 'public-google-sheets-parser';
	let isItOpen = false;
	let isLoaded = false;
	const isThisStringToday = (dateString: string) => {
		const dateParts = dateString.split('.');
		const year = parseInt(dateParts[2]);
		const month = parseInt(dateParts[1]) - 1; // Subtract 1 since months are zero-based
		const day = parseInt(dateParts[0]);

		const parsedDate = new Date(year, month, day);

		const today = new Date();
		today.setHours(0, 0, 0, 0); // Set the time to midnight for comparison

		return parsedDate.getTime() === today.getTime();
	};
	// Getting Shichtplan as json https://docs.google.com/spreadsheets/d/1DWzdj3dfXAUQ0NJtNxDfqWvW6AeO8LcTMXUUZeGU4XU/edit#gid=1769736678
	const parser = new PublicGoogleSheetsParser('1DWzdj3dfXAUQ0NJtNxDfqWvW6AeO8LcTMXUUZeGU4XU');
	parser.parse().then((data) => {
		const todaysItem = data?.find((item) => item.date && isThisStringToday(item.date));
		isItOpen = !!todaysItem?.isOpen;
		isLoaded = true;
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
