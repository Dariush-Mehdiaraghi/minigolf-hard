<script lang="ts">
	import SpecialLink from './specialLink.svelte';

	export let url: string;
	export let label: string;
</script>

<div id="special-action">
	<SpecialLink anchorProps={{ href: url }}>{label}</SpecialLink>
</div>

<style lang="scss">
	#special-action {
		position: absolute;
		z-index: 3;
		transform-origin: 50% 50%;
		transform: rotate(-10deg);
		/* Base font size before media queries */
		font-size: 3em;
		animation: wiggle 2s infinite ease-in-out;
		transition: all 0.5s ease-in-out;
		
		@media (max-width: 1400px) {
			font-size: 1.3em;
		}
		@media (max-width: 700px) {
			font-size: 1em;
		}
		@media (max-width: 400px) {
			font-size: 0.8em;
		}

		@keyframes wiggle {
			0% {
				transform: rotate(-30deg);
			}
			50% {
				transform: rotate(-20deg);
			}
			100% {
				transform: rotate(-30deg);
			}
		}
	}
	
	#special-action:hover {
		/* Base hover font size before media queries */
		font-size: 3.5em;
		
		@media (max-width: 1400px) {
			font-size: 1.5em;
		}
		@media (max-width: 700px) {
			font-size: 2em;
		}
		@media (max-width: 400px) {
			font-size: 1em;
		}
	}
</style>
