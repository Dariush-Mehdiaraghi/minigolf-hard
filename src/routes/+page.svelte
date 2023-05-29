<script>
	import videofile from '$lib/images/MGH_Logo_GIF_loop.mp4';
	import bildli from '$lib/images/bounce.png';
</script>

<svelte:head>
	<title>Minigolf Hard</title>
	<meta name="description" content="Auf der Hardgutbrache in Zürich entsteht bis im Sommer ein offenes und unkommerzielles Freizeitangebot. Genauer: ein Minigolfplatz mit viel Platz für Spontanes, Soziales und Kulturelles. Gemeinsam mit der Nachbarschaft, Kollektiven aus der Stadt und allen, die sich interessieren, entstehen die Bahnen aus recycelten Materialien." />
</svelte:head>

<section>

	<div class="div-bounce x">
		<img class="img-bounce y" src={bildli} alt="face" />
	  </div>

	<div>
		<video class="video-size" autoplay muted loop>
			<track kind="captions">
			<source src={videofile}>
			Your browser does not support the video tag.
		</video>
	</div>

	<div class="under">
		<h1>Eröffnungsfest am 10. Juni ab 14:00 Uhr.</h1>
	
	<h3>
		<a href="https://www.instagram.com/minigolfhard/"target="_blank" class="first">Instagram</a>
		 – 
		<a href="https://chat.whatsapp.com/KSS5ESyOHEI5J8M3xI8jNp"target="_blank" class="second">Whatsapp Chat</a>
	</h3>

	<h4>Verein Minigolf Hard, Hardgutstrasse 7, 8048 Zürich</h4>
	
	
	</div>
</section>

<style scoped>
</style>
