<script lang="ts">
	import PublicGoogleSheetsParser from 'public-google-sheets-parser';

	const spreadsheetId = '1DWzdj3dfXAUQ0NJtNxDfqWvW6AeO8LcTMXUUZeGU4XU';
	// https://docs.google.com/spreadsheets/d/1DWzdj3dfXAUQ0NJtNxDfqWvW6AeO8LcTMXUUZeGU4XU/edit?usp=sharing
	// 1. You can pass spreadsheetId when instantiating the parser:
	const parser = new PublicGoogleSheetsParser(spreadsheetId);
	let isItOpen = false;
	parser.parse().then((items: { datum: string; isOpen: boolean }[]) => {
		console.log(items);
		const todaysItem = items.find((item) => {
			const date = new Date(item.datum);
			const today = new Date();
			return (
				date.getDate() === today.getDate() &&
				date.getMonth() === today.getMonth() &&
				date.getFullYear() === today.getFullYear()
			);
		});
		isItOpen = !!todaysItem?.isOpen;
		// items should be [{"a":1,"b":2,"c":3},{"a":4,"b":5,"c":6},{"a":7,"b":8,"c":9}]
	});
</script>

<section id="is-it-open-widget">
	{#if isItOpen}
		<span>Heute ist die Mini Bar offen!</span>
	{:else}
		<span>Heute keine Mini Bar</span>
	{/if}
</section>

<style>
	#is-it-open-widget {
		width: 100%;
		display: grid;
		place-items: center;
		font-size: 2em;
		text-align: center;
	}
</style>
