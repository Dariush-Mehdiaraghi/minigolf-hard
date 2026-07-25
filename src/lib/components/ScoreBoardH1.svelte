<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<h1>{@render children()}</h1>

<style>
	h1 {
		text-align: center;
		border-bottom: 1px dotted black;
		width: 100%;
		padding: 0.5em 0;
	}
</style>
