<script>
	import content from '$lib/content/content';
    const description = content.about.description
</script>
<section id="about">
    <p id="about__text">

        {description}
    </p>
</section>
<style lang="scss" scoped>
    #about{
        display: grid;
        place-items: center;
        padding: 2em;
        &__text{
        padding: 2em;
            font-size: 2em;
            max-width: 700px;
            text-align: center;
        }
    }
</style>