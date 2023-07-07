<script lang="ts" >
	import PublicGoogleSheetsParser from 'public-google-sheets-parser';

	const spreadsheetId = '1DWzdj3dfXAUQ0NJtNxDfqWvW6AeO8LcTMXUUZeGU4XU';
	// https://docs.google.com/spreadsheets/d/1DWzdj3dfXAUQ0NJtNxDfqWvW6AeO8LcTMXUUZeGU4XU/edit?usp=sharing
	// 1. You can pass spreadsheetId when instantiating the parser:
	const parser = new PublicGoogleSheetsParser();
	let isItOpen = false;
	parser.parse(spreadsheetId).then((items: { datum: string; isOpen: boolean }[]) => {
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
