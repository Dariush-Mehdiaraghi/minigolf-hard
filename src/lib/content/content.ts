import tschinggeFrisbee from '../images/withBackground/tschinggeFrisbee.png';
import bälle from '../images/withBackground/Bälle.png';
const content: { [x: string]: any; smallSections: SmallSectionProps[] } = {
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
		// {
		// 	color: 'yellow',
		// 	contentArray: [
		// 		{ size: 'm', text: 'PROGRAMM' },
		// 		{
		// 			size: 'm',
		// 			text: '17:00 Saitün <br> 20:30 Walter Frosch<br>21:30 Labaya<br>23:00 Yuul<br>00:30 Molekühl'
		// 		},
		// 		{ size: 'm', text: 'SAMSTAG 10.06.2023' }
		// 	]
		// },
		{
			color: 'pink',
			align: 'left',
			contentArray: [
				{ size: 'l', text: 'IMMER OFFEN' },
				{
					size: 'm',
					text: 'Schläger und Bälle findest du jederzeit in der Kiste beim roten Container'
				},

				{
					size: 'm',
					text: 'Betreuter Betrieb mit Bar bei gutem Wetter an folgenden Tagen<br><br>  MI  16 – 22 Uhr<br>FR  16 – 22 Uhr<br>SA  14 – 20 Uhr<br>SO  12 – 18 Uhr'
				},
				{ size: 'm', text: 'ADRESSE' },
				{ size: 'm', text: 'Verein Minigolf Hard Hardgutstrasse 7 8048 Zürich' },
				{ size: 'm', text: 'KONTAKT' },
				{ size: 'm', text: 'minigolf.hard@gmail.com <br/> <a href="https://www.instagram.com/minigolfhard/" target="_blank" rel="noreferrer">Instagram @minigolfhard</a><br/> <a href="https://chat.whatsapp.com/KSS5ESyOHEI5J8M3xI8jNp" target="_blank" rel="noreferrer">Whatsapp Chat →</a>' }
			]
		},
		// {
		// 	color: 'pink',
		// 	align: 'left',
		// 	contentArray: [{ size: 'm', image: { src: tschinggeFrisbee, alt: 'Pizza illustration' } }]
		// },
		{
			color: 'yellow',
			align: 'left',
			contentArray: [{ size: 'm', image: { src: bälle, alt: 'Bälle illustration' } }]
		},
		
	]
};
export default content;
