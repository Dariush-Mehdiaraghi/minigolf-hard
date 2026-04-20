<script lang="ts">
</script>

<svelte:head>
	<title>Mitmachen | Minigolf Hard</title>
	<meta name="description" content="Mitmachen bei Minigolf Hard" />
</svelte:head>

<div class="content">
	<h1>
		Einladung
		<br />
		zum
		<br />
		mitmachen
	</h1>
	<div class="box-b">
		<p>
			Irgendwo zwischen den Stadtkreisen am Rande des alten Schlachthofs findet sich die
			Hardgutbrache mit ihrem Minigolfplatz. Dieser Ort lebt von all den aktiven Besucher:innen, die
			hier Zeit verbringen, Freund:innen finden, spielen und Feste feiern.
		</p>
		<p>
			Dieses Jahr wollen wir euch einladen, noch aktiver an der Gestaltung dieses Freiraums
			teilzunehmen – mit euren Veranstaltungen, Gemüsebeeten und allen anderen crazy Ideen. Wir
			haben Platz zum Bauen, viele kleine und grosse Dinge die gepflegt werden wollen und Bühnen,
			Zelte, Küchen und Tische, um etwas zu veranstalten.
		</p>
	</div>
	<img src="./images/Instagramm_export21.png" alt="Minigolf Hard" />
	<div class="box">
		<h2>Bauen</h2>
		<p>
			Habt ihr eine Idee, was auf der Brache gebaut werden könnte? Ihr könnt an einer Minigolfbahn
			weiterbauen, Sitzgelegenheiten konzipieren, endlich einen Pizzaofen errichten oder eure
			Installation aufstellen. Hier ist das Werkzeug, ihr habt die Idee!
		</p>
	</div>
	<div class="box">
		<h2>Veranstalten</h2>
		<p>
			Wollt ihr eine öffentliche Veranstaltung auf der Brache organisieren? Egal ob Konzert, Lesung,
			Workshop, Performance, Kino, Public viewing, Yogasession oder Flohmi... Hier ist der Raum, ihr
			möchtet organisieren!
		</p>
	</div>
	<div class="box">
		<h2>Pflegen</h2>
		<p>
			Möchtet ihr die Brache mit uns pflegen und neue Projekte anreissen? Die Grünflächen, die
			Gemüsebeete und die Werkstatt benötigen viel Care. Wir haben die kleinen und grossen Dinge,
			ihr möchtet mitwirken!
		</p>
	</div>
	<div class="box-b">
		<p class="center">
			Haben wir euer Interesse geweckt?
			<br />Dann meldet euch mit euerer Idee bei
			<br />
			<br /><a href="mailto:minigolf.hard@gmail.com">minigolf.hard@gmail.com</a>
		</p>
	</div>
	<div class="box-kalender">
		<h2>Kalender</h2>
		<p>
			Hast du gewusst, dass du auf <a href="https://hardgutbrache.ch/kalender"
				>hardgutbrache.ch/kalender</a
			> immer aktuelle Veranstaltungen findest?
		</p>
	</div>
</div>

<style lang="scss" scoped>
	h1 {
		text-align: center;
		text-transform: uppercase;
		font-size: 5em;
		line-height: 90%;
	}

	.center {
		text-align: center;
	}

	img {
		align-self: center;
		width: 60%;
		padding-left: 20%;
		padding-right: 20%;
	}
	.box {
		background-color: #ea9ac3;
		border-radius: 1em;
		padding: 1em;
		margin-top: 1em;
		padding-bottom: 0.1em;
	}

	.box-kalender {
		background-color: #c8de1e;
		border-radius: 1em;
		padding: 1em;
		margin-top: 1em;
		padding-bottom: 0.1em;
	}

	.box-b {
		background-color: transparent;
		border-radius: 1em;
		padding: 1em;
		padding-bottom: 0.1em;
	}

	p {
		font-size: 1.1em;
	}

	h2 {
		text-transform: uppercase;
		margin-top: 0px;
	}
	.content {
		min-height: 100vh;
		background-color: #e1ff01;
		padding-left: 20vw;
		padding-right: 20vw;
		padding-bottom: 20vw;
	}

	a {
		padding: 0.6em 1em;
		border-radius: 4em;
		border: var(--border-style);
		text-transform: uppercase;
		transition: 0.2s;
		text-align: center;
		margin-bottom: 0.4em;

		&.non-button {
			padding: 0.1em 0.5em;
			border-radius: none;
			background-color: white;
			border: none;
		}
	}
	a:hover {
		background-color: black;
		color: white;
		transition: 0.2s;
	}
	@media only screen and (max-width: 600px) {
		.content {
			padding-left: 5vw;
			padding-right: 5vw;
		}

		p {
			font-size: 1.6em;
		}
	}
</style>
