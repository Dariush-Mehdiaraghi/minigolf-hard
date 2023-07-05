<script lang="ts">
	export let section: SmallSectionProps;
</script>

<section
	class="small-section"
	style="text-align: {section.align}; background:var(--{section.color}-main)"
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
	.small-section {
		display: grid;
		place-items: center;
		padding: 2em;
		text-align: center;
		.m {
			font-size: 2em;
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
