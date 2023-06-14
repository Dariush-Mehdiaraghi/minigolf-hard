<script>
	import content from '$lib/content/content';
    const description = content.about.description
  import blueBall from '$lib/images/blueBall.svg';
  import greenBall from '$lib/images/greenBall.svg';
  import yellowBall from '$lib/images/yellowBall.svg';
  import greenBallFriendly from '$lib/images/greenBallFriendly.svg';
</script>
<section id="about">
    <img src={blueBall} alt="blue minigolf ball illustration"/>
    <img src={yellowBall} alt="yellow minigolf ball illustration"/>
    <p id="about__text">
        {description}
    </p>
    <img src={greenBall} alt="green minigolf ball illustration"/>
    <img src={greenBallFriendly} alt="green minigolf ball illustration"/>
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