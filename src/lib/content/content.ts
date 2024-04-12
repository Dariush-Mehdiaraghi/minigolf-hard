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
};
const content: ContentObject = {
	linksPage: {
		title: 'Links',
		description: '',
		links: [
			{
				title: 'Anmeldung Minigolf Hard Turnier 2023',
				url: 'https://forms.gle/RU3d3jDHDbpY1N696'
			},
			{
				title: 'Whatsapp Chat',
				url: 'https://chat.whatsapp.com/KSS5ESyOHEI5J8M3xI8jNp'
			},
			{
				title: 'Zur Hauptseite',
				url: 'https://minigolfhard.ch/'
			}
		]
	},
	about: {
		title: 'About',
		description:
			'Abseits der üblichen Zentren der Stadt soll die Hardgutbrache ein Freiraum sein, wo alle willkommen sind, um sich sportlich und kreativ auszuleben. Ein Ort, um aktiv zu sein oder um die Zeit zu geniessen. Wie vieles hier wurden die Bahnen von verschiedenen Gruppen, Vereinen und Einzelpersonen gebaut. '
	},
	smallSections: [
		// {
		// 	color: 'blue',
		// 	contentArray: [
		// 		{ size: 'm', text: 'ERÖFFNUNGSFEST' },
		// 		{ size: 'l', text: "DRINKS, FOOD,<br>BANDS, DJ'S und MEHR" },
		// 		{ size: 'm', text: 'SAMSTAG 10.06.2023' }
		// 	]
		// },
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
					text: 'Nichts! Das Spielen ist komplett gratis. Jedoch sind wir um jeden solidarischen Beitrag froh, um den Platz noch schöner gestalten zu können. TWINT QR-Codes dafür hängen beim roten Container.'
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
		}
	]
};
export default content;
