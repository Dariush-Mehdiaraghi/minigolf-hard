<script lang="ts">
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
	fetch('https://api.fureweb.com/spreadsheets/1DWzdj3dfXAUQ0NJtNxDfqWvW6AeO8LcTMXUUZeGU4XU')
		.then((res) => res.json())
		.then((res?: { data?: { date?: string; isOpen?: boolean }[] }) => {
			const todaysItem = res?.data?.find((item) => item.date && isThisStringToday(item.date));
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
	{/if}
</section>

<style>
	#is-it-open-widget {
		width: 100%;
		display: grid;
		place-items: center;
		font-size: 2em;
		text-align: center;
		margin-bottom: 1em;
	}
</style>
