<script lang="ts">
	export let section: SmallSectionProps;
</script>

<section
	class={(section.isFullWidth ? 'full-width' : '') + ' small-section'}
	style="text-align: {section.textAlign}; background:var(--{section.color}-main)"
>
	<p id="about__text">
		{#each section.contentArray as block}
			{#if block.text}
				<p class={block.size} bind:innerHTML={block.text} contenteditable="false" />
			{/if}
			{#if block.image}
				<img class={block.size} src={block.image.src} alt={block.image.alt} />
			{/if}
		{/each}
	</p>
</section>

<style lang="scss" scoped>
	.full-width {
		// take the full width in the grid
		grid-column: 1 / -1;
	}
	.small-section {
		display: grid;
		place-items: center;
		padding: 2em;
		text-align: center;
		p{
			max-width: 61ch;
		}

		.m {
			font-size: 2em;
			margin-bottom: 0.5em;
		}
		.l {
			font-size: 3em;
		}
		&__text {
			padding: 2em;
			font-size: 2em;
			max-width: 700px;
			text-align: center;
		}
		img {
			width: 100%;
		}
	}
</style>
