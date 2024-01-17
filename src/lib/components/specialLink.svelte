<script lang="ts">
export let anchorProps: {
    href: string;
    [key: string]: any;
};
</script>

<a {...anchorProps} target="_blank" rel="noopener noreferrer">
    <slot />
</a>
<style lang="scss" scoped>
   	a {
        white-space: nowrap;
		font-size: 2em;
		padding: 1em;
		color: white;
		border-radius: 2em;
		line-height: 1.2em;
		padding: 0.8em 1.2em;
		&:hover {
			box-shadow: 0px 10px 0px 0px var(--pink-main);
		}
		background: var(--yellow-main);
		color: black;
		animation: pulse 2s infinite ease-in-out;
		@keyframes pulse {
			0% {
				transform: scale(1) translateY(10px);
				box-shadow: 0px 0px 0px 0px var(--pink-main);
			}
			50% {
				transform: scale(1.05) translateY(0px);
				box-shadow: 0px 10px 0px 0px var(--pink-main);
			}
			100% {
				transform: scale(1) translateY(-10px);
				box-shadow: 0px 0px 0px 0px var(--pink-main);
			}
		}
	}
    </style>