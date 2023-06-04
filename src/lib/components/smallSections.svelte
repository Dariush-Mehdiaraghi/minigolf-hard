<script lang="ts">
	import content from '$lib/content/content.json';
	import SmallSection from './smallSection.svelte';
	const smallSectionsArray  = content.smallSections as SmallSectionProps[];
</script>

<div id="smallSections">
	{#each smallSectionsArray as section}
		<SmallSection section={section} />
	{/each}
</div>
<style lang="scss" scoped>
    #smallSections {
        display: grid;
        // have 2 columns if possible else wrap to 1 column
        grid-template-columns: 1fr;
        // have maximum of two columns
        @media screen and (min-width: 800px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>