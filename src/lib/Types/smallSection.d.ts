interface SmallSectionBlock {
	size: 'm' | 'l' | 's';
	id?: string;
	text?: string;
	textEn?: string;
	image?: { src: string; alt: string; srcset?: string; sizes?: string };
}

interface SmallSectionProps {
	id?: string;
	color: string;
	textAlign?: 'left' | 'center' | 'right';
	isFullWidth?: boolean;
	contentArray: SmallSectionBlock[];
}
