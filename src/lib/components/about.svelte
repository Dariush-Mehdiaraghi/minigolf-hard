<script>
	import content from '$lib/content/content';
	import { language } from '$lib/stores/language';
	const description = content.about.description;
	const descriptionEn = content.about.descriptionEn;
</script>

<section id="about">
	<p id="about__text">
		{$language === 'en' ? descriptionEn : description}
	</p>
</section>

<style lang="scss" scoped>
	#about {
		display: grid;
		place-items: center;
		padding: var(--section-vertical-space) 2em;
		background: var(--white-main);
		&__text {
			box-sizing: border-box;
			width: min(100%, var(--full-section-content-width));
			max-width: none;
			font-size: 2em;
			text-align: center;
		}
	}
</style>
