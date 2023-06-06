import tschinggeFrisbee from '../images/withBackground/tschinggeFrisbee.png';
const content: {[x:string]: any, smallSections: SmallSectionProps[]} 
= {
	about: {
		title: 'About',
		description:
			'Auf der Hardgutbrache in Zürich entsteht bis im Sommer ein offenes und unkommerzielles Freizeitangebot. Genauer: ein Minigolfplatz mit viel Platz für Spontanes, Soziales und Kulturelles. Gemeinsam mit der Nachbarschaft, Kollektiven aus der Stadt und allen, die sich interessieren, entstehen die Bahnen aus recycelten Materialien. Im April und Mai wird in diversen Formaten wie Workshops, Bau-Wochenenden oder Open Calls alles gebaut, um Ende Mai den Platz mit einem Festival zu eröffnen.'
	},
	smallSections: [
		{
			color: 'blue',
			contentArray: [
				{ size: 'm', text: 'ERÖFFNUNGSFEST' },
				{ size: 'l', text: "DRINKS, FOOD,<br>BANDS, DJ'S und MEHR" },
				{ size: 'm', text: 'SAMSTAG 10.06.2023' }
			]
		},
		{
			color: 'yellow',
			contentArray: [
				{ size: 'm', text: 'PROGRAMM' },
				{
					size: 'm',
					text: '17:00 Saitün <br> 20:30 Walter Frosch<br>21:30 Labaya<br>23:00 Yuul<br>00:30 Molekühl'
				},
				{ size: 'm', text: 'SAMSTAG 10.06.2023' }
			]
		},
		{
			color: 'green',
			align: 'left',
			contentArray: [
				{ size: 'm', text: 'ÖFFNUNGSZEITEN' },
				{
					size: 'm',
					text: 'Bei gutem Wetter!<br> MI  16 – 22 Uhr<br>FR  16 – 22 Uhr<br>SA  14 – 20 Uhr<br>SO  12 – 18 Uhr'
				},
				{ size: 'm', text: 'ADRESSE' },
				{ size: 'm', text: 'Verein Minigolf Hard Hardgutstrasse 7 8048 Zürich' },
				{ size: 'm', text: 'KONTAKT' },
				{ size: 'm', text: 'mail@minigolfhard.ch Instagram @minigolfhard Whatsapp Chat →' }
			]
		},
		{
			color: 'pink',
			align: 'left',
			contentArray: [{ size: 'm', image: { src: tschinggeFrisbee, alt: 'Pizza illustration' } }]
		}
	] 
};
export default content