<section class="ball-images" aria-label="Minigolf Hard">
	<img src="/images/Betrieb7_JaninaTanner.webp" alt="Visitors playing minigolf at Minigolf Hard" />
	<img src="/images/Betrieb7_JaninaTanner.webp" alt="Visitors playing minigolf at Minigolf Hard" />
</section>

<style scoped>
	.ball-images {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		justify-items: center;
		padding-block: var(--section-vertical-space);
		@media screen and (min-width: 800px) {
			grid-template-columns: repeat(2, 1fr);
		}

		img {
			display: block;
			width: 100%;
			height: auto;
		}
	}
</style>