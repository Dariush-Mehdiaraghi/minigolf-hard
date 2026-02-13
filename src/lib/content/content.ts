import bälle from '../images/withBackground/Bälle.png';
type ContentObject = {
	linksPage: {
		title: string;
		description: string;
		links: { title: string; url: string }[];
	};
	about: {
		title: string;
		description: string;
	};
	smallSections: SmallSectionProps[];
	scoreboard: {
		title: string;
		description: string;
		holes: {id: string; description: string; bauer: string; text: string; weiter: string}[];
	};
};
const content: ContentObject = {
	linksPage: {
		title: 'Links',
		description: '',
		links: [
			{
				title: 'Hardgutbrache',
				url: 'https://hardgutbrache.ch'
			},
			{
				title: 'Whatsapp Chat',
				url: 'https://chat.whatsapp.com/KSS5ESyOHEI5J8M3xI8jNp'
			},
			{
				title: 'Zur Hauptseite',
				url: 'https://minigolfhard.ch/'
			},
			{
				title: 'Zugang (DE)',
				url: 'https://drive.proton.me/urls/VS7S4XME8M#E6MUQpBGNBeJ'
			},
			{
				title: 'Access (EN)',
				url: 'https://drive.proton.me/urls/P1V5ZPGEVG#fZ0gcllfY7EO'
			},
			{
				title: 'Google Maps',
				url: 'https://maps.app.goo.gl/ksJQ4Lg1bfE5KJxTA'
			}
		]
	},
	about: {
		title: 'About',
		description:
			'Abseits der üblichen Zentren der Stadt soll die Hardgutbrache ein Freiraum sein, wo alle willkommen sind, um sich sportlich und kreativ auszuleben. Ein Ort, um aktiv zu sein oder um die Zeit zu geniessen. Wie vieles hier wurden die Bahnen von verschiedenen Gruppen, Vereinen und Einzelpersonen gebaut. '
	},
	smallSections: [
		{
			color: 'blue',
			textAlign: 'center',
			isFullWidth: true,

			contentArray: [
				{ size: 'l', text: 'FAQ' },
				{
					size: 'm',
					text: 'Was kostet der Spass?'
				},
				{
					size: 's',
					text: 'Nichts! Das Spielen ist komplett gratis. Jedoch sind wir um jeden solidarischen Beitrag froh, um den Platz noch schöner gestalten zu können. TWINT QR-Codes dafür hängen beim roten Container.<br/><br/> Oder direkt hier: <button id="twint-button" style="width: auto; height: 58px; border-radius: 6px; display: flex; justify-content: center; cursor: pointer; background-color: transparent; border: none; align-items: center; margin: 0 auto; padding-top: 2em;" onclick="window.open(\'https://go.twint.ch/1/e/tw?tw=acq.uuBulCtlRE-mEyd9V5R2A2mvX1TC_FGpSA7qn2tNbarI_bYlZ5Xrt-NeILaJS8jz\', \'_blank\')" > <img style="width: auto; height: 58px" alt="Embedded TWINT button" src="https://go.twint.ch/static/img/button_dark_de.svg"/></button>'
				},
				{
					size: 'm',
					text: 'Kann ich den Platz reservieren?'
				},
				{
					size: 's',
					text: 'Der Minigolf Hard ist ein öffentlicher Platz und kann darum nicht reserviert werden. Es sollte aber immer genug Schläger und Bälle, auch für grössere Gruppen haben.'
				},
				{
					size: 'm',
					text: 'Anfahrt'
				},
				{
					size: 's',
					text: 'Für Autos gibt es leider keine Parkmöglichkeit. Für Velos haben wir einen Veloständer. Mit dem ÖV kommst du am besten zur Haltestelle <a href="https://maps.app.goo.gl/Di8vWkbk9TCdJMY68" target="_blank" rel="noopener noreferrer"><u>SBB Werkstätte</u></a> oder <a href="https://maps.app.goo.gl/CCvHq8PFzUj2ZJbG9" target="_blank" rel="noopener noreferrer"><u>Herdernstrasse</u></a>.'
				},
				{
					size: 'm',
					text: 'Wohin mit dem Abfall?'
				},
				{
					size: 's',
					text: 'Direkt auf der anderen Seite der Strasse hats eine Entsorgungsstelle für Altglas und Metall'
				},
				{
					size: 'm',
					text: 'Verpflegung'
				},
				{
					size: 's',
					text: 'Du kannst gerne deine Getränke und Essen mitbringen. Bei gutem Wetter gibts auch Getränke bei der Minibar (siehe unten für Öffnungszeiten).'
				},
				{
					size: 'm',
					text: 'Access / Zugang'
				},
				{
					size: 's',
					text: 'Viele weitere Informationen zum Zugang zur Hardgutbrache und Minigolf Hard findest du in unserem Zugangsdokument auf Deutsch und English. </br> <a href="https://docs.google.com/document/d/1t1WUAZUXulT6Zgki9bWCLppgvjY9A9WEfVtlUKIh2Sk/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><u>Zugangsdokument (DE)</u></a>, <a href="https://docs.google.com/document/d/1jonnofPn8MuhIsExAloznorxo_MY9zlvLax2ttlmmFk/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><u>Access Document (EN)</u></a>'
				}
			]	
		},
		{
			color: 'pink',
			textAlign: 'left',
			contentArray: [
				{ size: 'l', text: 'IMMER OFFEN' },
				{
					size: 'm',
					text: 'Schläger und Bälle findest du jederzeit in der Kiste beim roten Container'
				},

				{
					size: 'm',
					text: 'Betreuter Betrieb mit Care-Person bei gutem Wetter an folgenden Tagen<br><br>  FR  16:00 bis Schluss<br>SA  14:00 bis Schluss<br>SO  14:00 bis Schluss'
				},
				{ size: 'm', text: 'ADRESSE' },
				{ size: 'm', text: 'Verein Minigolf Hard<br/>Hardgutstrasse 7<br/>8048 Zürich' },
				{ size: 'm', text: 'KONTAKT' },
				{
					size: 'm',
					text: 'minigolf.hard@gmail.com <br/> <a href="https://www.instagram.com/minigolfhard/" target="_blank" rel="noreferrer">Instagram @minigolfhard</a><br/> <a href="https://chat.whatsapp.com/KSS5ESyOHEI5J8M3xI8jNp" target="_blank" rel="noreferrer">Whatsapp Chat →</a>'
				}
			]
		},
		// {
		// 	color: 'pink',
		// 	textAlign: 'left',
		// 	contentArray: [{ size: 'm', image: { src: tschinggeFrisbee, alt: 'Pizza illustration' } }]
		// },
		{
			color: 'yellow',
			textAlign: 'left',
			contentArray: [{ size: 'm', image: { src: bälle, alt: 'Bälle illustration' } }]
		},
		{
			color: 'white',
			textAlign: 'left',
			isFullWidth: true,

			contentArray: [
				{ size: 'l', text: 'Unterstützung' },
				{
					size: 'm',
					text: 'Jugendkulturhaus Dynamo'
				},
				{
					size: 's',
					text: 'Materielle Unterstützung: Partizipative Bau-Phase 2023 und 2024, Sommer Fest 2024 und Betrieb'
				},
				{
					size: 'm',
					text: 'Sozialdepartement Stadt Zürich'
				},
				{
					size: 's',
					text: 'Finanzielle Unterstützung: Partizipative Bau-Phase 2023, Sommer Fest 2024'
				},
				{
					size: 'm',
					text: 'Grün Stadt Zürich'
				},
				{
					size: 's',
					text: 'Materielle Unterstützung: Partizipative Bau-Phase 2023'
				},
				{
					size: 'm',
					text: 'Sportamt Stadt Zürich'
				},
				{
					size: 's',
					text: 'Finanzielle Unterstützung: Infrastruktur 2023'
				},
				{
					size: 'm',
					text: 'Migros Kulturprozent'
				},
				{
					size: 's',
					text: 'Finanzielle Unterstützung: Partizipative Bau-Phase 2023, Sommer Fest 2024.'
				},
				{
					size: 'm',
					text: 'Verein Baustell'
				},
				{
					size: 's',
					text: 'Materielle Unterstützung, Räumlichkeiten, Prozess'
				}
			]	
		}
	],
	scoreboard: {
		title: 'Punktekarte',
		description: 'Scoreboard description',
		holes: [
			{ id: 'L', description: 'Another Brick in the Wall', bauer: '„Minigolfbaugenossenschaft Wiedikon”', text: 'Robustheit, Nachhaltigkeit, Optik und Spielfreude waren unsere Hauptkriterien. Gebaut wurde die Bahn weitestgehend aus nicht mehr gebrauchten Baumaterialien. Die Ton- und Ziegel-Elemente haben wir auf Tutti zusammengesucht und den Beton bekamen wir als Überschuss vom Betonwerk in Schlieren. Durch die Terracotta-Optik passt die Bahn zudem hervorragend zu den umliegenden Gebäuden.', weiter: 'Die Bahn erhielt 2024 und 2025 einen neuen Anstrich.' },
			{ id: 'J', description: 'Susie the Dinosaur', bauer: '', text: 'Die Beschreibung kommt bald. ', weiter: ''},
			{ id: 'M', description: 'Viele Wege führen nach Zürich', bauer: 'SCI Dynamo Volunteers', text: 'Aus der ganzen Welt sind wir zusammengekommen, um dieses Bauprojekt zu verwirklichen. Es gibt weder einen richtigen noch einen einzigen Weg, etwas zu erreichen, das haben wir gelernt. So ist diese Bahn mit unterschiedlichen Wegen und Zielen und zwei Teilen verbunden durch Brücken entstanden. ', weiter: '' },
			{ id: 'K', description: 'Von der Küche ... ins Badezimmer', bauer: 'Morris, Andrea und Julian', text: 'Wenn Neues entstehen soll, muss meist Altes weichen: ausrangiert und zu entsorgen bitte. Schade eigentlich, dachten wir, die im Zusammenhang mit einem Umbau Herr (oder Frau) geworden sind von diesen Bauteilen. Also nutzen wir doch die Chance, aus Altem Neues zu schaffen und Vorhandenes in andere Zusammenhänge zu überführen.', weiter: '' },
			{ id: 'I', description: 'Karambolage Cupcake', bauer: 'Fanny, Julius und Zohra', text: 'Sei zu Gast an unserer Tafel, wir laden dich ein! Aber Achtung Zuckerschock: Wenn der Cupcake dir den Kopf verdreht, zieht es dir ratzfatz die Tischdecke unter den Füssen weg, die Limo kippt, die Erdbeeren kugeln - und dein Ball endet im Abwasch. Also aufgepasst und Spass gehabt! Spätestens seit einem gemeinsamen Urlaub in Wien, wo es von beidem reichlich gab, teilen Fanny, Julius und Zohra ihre Leidenschaft für Minigolf und Kuchen. Ausser Süssspeisen mögen sie Kitsch und neuerdings Beton – und das gemeinsame Nachdenken, Ausprobieren und Kreativ-Werden. Sie bedanken sich herzlich bei ihren Freund*innen, die sich mit ihnen auf und abseits der Baustelle in den letzten Wochen mit dem grossen Thema Minigolf beschäftigt haben.', weiter: '2025 mit einem neuen Hinderniss aus PVC Rohren ergänzt.' },
			{ id: 'H', description: 'Mezcaland', bauer: 'Werdi-Kollektiv & Fründe & Familiä', text: 'Zwei Gipfel, ein Looping umrandet von der Wüstenwurst. Das ist Mezcaland, denn in der Schöne liegt die Wüste. Wenig gekauft, viel gefunden und bekommen.', weiter: 'Die Bahn erhielt 2024 und 2025 einen neuen Anstrich und frische Kakteen.' },
			{ id: 'A', description: 'Post-Humanism', bauer: 'Abbott', text: 'This low-tech golf hole uses only materials found on or very near the site (except the red clover seeds). Once the human player gets the ball up the ramp, the rocks decide where the ball will go. For a moment, human ambition is neutralized.', weiter: '2024 wurde die Bahn aufgefrischt. 2025 mit einem neuen Pachinko Board ergänzt.' },
			{ id: 'B', description: 'Stadion', bauer: 'Verein Minigolf Hard', text: 'Eigentlich wollten wir nur als Test einen kleinen Pizzaofen bauen. Entstanden ist aber diese Bahn. Auf einem Magerbeton-Podest aus feinstem Kies dieser Brache ruhen alte Schalungsbretter. Gekleidet wurde das Ganze mit bestem Kunstrasen aus dem Off-Cut.', weiter: '2024 wurde die Bahn mit pinker Farbe aufgefrischt. 2025 wurde die Bahn von Claudio TOTALSANIERT und ist jetzt ein Fussballstadion.' },
			{ id: 'D', description: 'Il vulcano che sputa cocciopesto', bauer: '', text: 'Das Ziel ist der Vulkankrater. Die Bahn besteht aus Cocciopesto (Sumpfkalk, Ziegelmehl), einem römischen Putzmörtel, den wir mit Halbedelsteine polierten und mit Olivenölseife imprägnierten. Das Kalkfundament (Sumpfkalk, hydraulischer Kalk, Branntkalk, Kies/Sand) mischten und verdichteten wir mit einem Handstampfer vor Ort.', weiter: '2024 mit einer neuen, filigranen Farbschicht und Epoxy-Harz überzogen. 2025 mit einer Metallbahn ergänzt.' },
			{ id: 'F', description: 'Dem Drachen eine Burg', bauer: 'Patricia und Wim', text: 'Im Jahr 2023 wurde diese Bahn erbaut von der 5. Klasse, S. Ramos, Schulhaus Feld 1 in Urdorf. Jedes Kind hat dabei durch eigene Ideen, das Sammeln von Materialien, das Notieren von Abläufen, das Umsetzen und Herstellen von Einzelteilen einen grossen Beitrag am Ganzen geleistet.', weiter: '2024 wurde die Bahn von Wim und Patricia in eine Drachenwelt umgebaut. 2025 aufgefrischt mit einem neuen Burggraben.' },
			{ id: 'E', description: 'Multigolf', bauer: 'Architecture for Refugees Schweiz', text: 'Die Minigolfbahn „Multigolf“ versucht auf die Notwendigkeit der Zusammenarbeit im Leben und Spiel hinzuweisen. Sowohl hier auf der Brache Hard als auch im täglichen Leben sind wir auf die Symbiose mit anderen Menschen angewiesen. Alle Holzstücke, die verwendet wurden kommen von unseren alten Projekten, die wir in drei letzten Jahren gebaut haben, kein Stück wurde geschnitten, es besteht immer die Möglichkeit, alte Projekte wieder zu bauen.', weiter: '2024 wurde die Bahn aufgefrischt. 2025 mit einem neuen Labyrinth verbessert.' },
			{ id: 'G', description: 'Daggeli', bauer: 'Rafael und Tim', text: 'Dackel sind klein, lang und süss. Diese Bahn ist gross, noch länger und haarig. Versuche den Ball durch das borstige Fell des Dackels in sein Popo-Loch zu schiessen. ', weiter: '' }
		]
	}
};
export default content;
