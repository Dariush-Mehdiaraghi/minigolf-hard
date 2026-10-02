<script>
	import About from '$lib/components/about.svelte';
	import Landing from '$lib/components/landing.svelte';
	import SmallSections from '$lib/components/smallSections.svelte';
	import { language } from '$lib/stores/language';
</script>

<svelte:head>
	<title>Minigolf Hard</title>
	<meta
		name="description"
		content={$language === 'de'
			? 'Auf der Hardgutbrache in Zürich entsteht bis im Sommer ein offenes und unkommerzielles Freizeitangebot. Genauer: ein Minigolfplatz mit viel Platz für Spontanes, Soziales und Kulturelles. Gemeinsam mit der Nachbarschaft, Kollektiven aus der Stadt und allen, die sich interessieren, entstehen die Bahnen aus recycelten Materialien.'
			: 'Minigolf Hard is a free, community-built minigolf course on the Hardgutbrache in Zurich, open to everyone.'}
	/>
</svelte:head>

<div class="nav-gradient" aria-hidden="true"></div>

<nav class="page-nav" aria-label={$language === 'de' ? 'Hauptnavigation' : 'Main navigation'}>
	<a href="#about">{$language === 'de' ? 'Über Uns' : 'About'}</a>
	<a href="#besuchen">{$language === 'de' ? 'Besuchen' : 'Visit'}</a>
	<a href="#kalender">{$language === 'de' ? 'Kalender' : 'Calendar'}</a>
	<a href="#faq">FAQ</a>
	<a href="#kontakt">{$language === 'de' ? 'Kontakt' : 'Contact'}</a>
	<a href="https://hardgutbrache.ch" target="_blank" rel="noopener noreferrer">
		Hardgutbrache<span aria-hidden="true">↗</span>
	</a>
	<a href="/score-board">
		Score-Board<span aria-hidden="true">↗</span>
	</a>
	<div class="language-switch" role="group" aria-label="Language">
		<button
			type="button"
			class:active={$language === 'de'}
			aria-pressed={$language === 'de'}
			onclick={() => language.set('de')}>DE</button
		>
		<button
			type="button"
			class:active={$language === 'en'}
			aria-pressed={$language === 'en'}
			onclick={() => language.set('en')}>EN</button
		>
	</div>
</nav>

<Landing />
<About />
<SmallSections />

<style>
	.nav-gradient {
		position: fixed;
		inset: 0 0 auto;
		z-index: 9;
		height: 7rem;
		pointer-events: none;
		background: linear-gradient(
			to bottom,
			var(--yellow-main) 0%,
			rgba(225, 255, 1, 0.92) 16%,
			rgba(225, 255, 1, 0.78) 32%,
			rgba(225, 255, 1, 0.58) 50%,
			rgba(225, 255, 1, 0.28) 72%,
			rgba(225, 255, 1, 0.10) 88%,
			rgba(225, 255, 1, 0) 100%
		);
	}

	.page-nav {
		position: fixed;
		top: 1rem;
		left: 50%;
		z-index: 10;
		display: flex;
		gap: 0.2rem;
		max-width: calc(100vw - 1rem);
		padding: 0.35rem;
		transform: translateX(-50%);
		border-radius: 40px;
		background: white;
		box-shadow: 0 0.35rem 1.2rem rgba(0, 0, 0, 0.18);
		overflow-x: auto;
		white-space: nowrap;

		a {
			display: inline-flex;
			align-items: center;
			gap: 0.1rem;
			padding: 0.55rem 0.7rem;
			border-radius: 40px;
			font-size: 1rem;
			transition: background-color 150ms ease;

			span {
				transform: translateY(-0.3em);
			font-size: 0.7em;
			line-height: 1;
			}

			&:hover,
			&:focus-visible {
				background: var(--yellow-main);
			}
		}

		@media (max-width: 600px) {
			gap: 0.36rem;
			padding: 0.24rem;
			.language-switch { order: -1; flex-shrink: 0; }

			a {
				padding: 0.54rem 0.42rem;
				font-size: 1.2rem;
				background: #f1f1f1;
				display: none;
			}

		.language-switch button {
			padding: 0.48rem 0.66rem;
			font-size: 0.96rem;
		}
		}

		.language-switch {
			display: flex;
			align-items: center;
			gap: 0.1rem;
			padding: 0.2rem;
			border-radius: 40px;
			background: #f1f1f1;

			button {
				border: 0;
				border-radius: 40px;
				padding: 0.4rem 0.55rem;
				background: transparent;
				color: inherit;
				font: inherit;
				font-size: 0.8rem;
				cursor: pointer;

				&.active {
					background: var(--yellow-main);
				}
			}
		}
	}

	@media (max-width: 600px) {
		.page-nav .language-switch button {
			padding: 0.48rem 0.66rem;
			font-size: 0.96rem;
		}
	}

	:global(#about),
	:global(#besuchen),
	:global(#kalender),
	:global(#faq),
	:global(#kontakt) {
		scroll-margin-top: 0;
	}
</style>
