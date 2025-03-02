import tschinggeFrisbee from '../images/withBackground/tschinggeFrisbee.png';
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
		holes: {id: string, description: string}[];
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
			color: 'yellow',
			isFullWidth: true,
			contentArray: [
				{ size: 'm', text: 'SAVE THE DATE: SOMMERFEST 2025' },
				{ size: 'l', text: "DRINKS, FOOD,<br>BANDS, DJ'S und MEHR" },
				{ size: 'm', text: 'FREITAG 06.06.2025 <br/> und <br/> SAMSTAG 07.06.2025' }
			]
		},
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
					text: 'Viele weitere Informationen zum Zugang zur Hardgutbrache und Minigolf Hard findest du in unserem Zugangsdokument auf Deutsch und English. </br> <a href="https://drive.proton.me/urls/VS7S4XME8M#E6MUQpBGNBeJ" target="_blank" rel="noopener noreferrer"><u>Zugangsdokument (DE)</u></a>, <a href="https://drive.proton.me/urls/P1V5ZPGEVG#fZ0gcllfY7EO" target="_blank" rel="noopener noreferrer"><u>Access Document (EN)</u></a>'
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
					text: 'Betreuter Betrieb mit Bar bei gutem Wetter an folgenden Tagen<br><br>  MI  16 – 21 Uhr<br>FR  16 – 21 Uhr<br>SO  16 – 21 Uhr'
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
		title: 'Scoreboard',
		description: 'Scoreboard description',
		holes: [
			{ id: 'L', description: 'L description' },
			{ id: 'J', description: 'J description' },
			{ id: 'M', description: 'M description' },
			{ id: 'K', description: 'K description' },
			{ id: 'I', description: 'I description' },
			{ id: 'H', description: 'H description' },
			{ id: 'A', description: 'A description' },
			{ id: 'B', description: 'B description' },
			{ id: 'D', description: 'D description' },
			{ id: 'F', description: 'F description' },
			{ id: 'E', description: 'E description' },
			{ id: 'G', description: 'G description' }
		]
	}
};
export default content;
