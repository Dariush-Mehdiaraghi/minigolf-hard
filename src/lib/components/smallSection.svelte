<script lang="ts">
	import { language } from '$lib/stores/language';
	let { section }: { section: SmallSectionProps } = $props();
</script>

<section
	id={section.id}
	class={(section.isFullWidth ? 'full-width ' : '') + (section.id === 'faq' ? 'faq-centered ' : '') + (section.contentArray.length > 0 && section.contentArray.every((block) => block.image) ? 'image-only ' : '') + 'small-section'}
	style="text-align: {section.id === 'faq' ? 'center' : section.textAlign}; background:var(--{section.color}-main)"
	>
		<div class="section-content">
			{#each section.contentArray as block, i (i)}
				{#if block.text}
					<p id={block.id} class={block.size}>{@html $language === 'en' && block.textEn ? block.textEn : block.text}</p>
				{/if}
				{#if block.image}
					<img class={block.size} src={block.image.src} alt={block.image.alt} />
				{/if}
			{/each}
		</div>
</section>

<style lang="scss" scoped>
	.full-width {
		// take the full width in the grid
		grid-column: 1 / -1;
	}
	.small-section {
		display: grid;
		place-items: start;
		padding: var(--section-vertical-space) clamp(2.5rem, 6vw, 5rem);
		text-align: left;
		box-sizing: border-box;

		p { margin-block: 0 0.75em; }

		.section-content {
			width: 100%;
			max-width: 61ch;
		}

		&.faq-centered {
			place-items: center;
			text-align: center;

			.section-content {
				text-align: center;
			}
		}

		&.full-width .section-content {
			width: min(100%, var(--full-section-content-width));
			max-width: none;
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

		&.image-only {
			align-items: stretch;
			justify-items: stretch;
			padding: 0;
			overflow: hidden;

			&.full-width {
				height: clamp(22rem, 48vw, 40rem);
			}

			> .section-content {
				width: 100%;
				height: 100%;
				max-width: none;
			}

			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		&#faq .section-content > .m:not(:first-child) {
			margin-top: 1.5em;
		}
	}

	@media (max-width: 600px) {
		.small-section p { font-size: 1.35em; }
		.small-section p.m { font-size: 2.2em; }
		.small-section p.l { font-size: 3em; }
	}
</style>
