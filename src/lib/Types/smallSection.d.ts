interface SmallSectionProps {
	color: string;
	textAlign?: 'left' | 'center' | 'right';
	isFullWidth?: boolean
	contentArray: { size: 'm' | 'l' | 's'; text?: string, image?: {src: string, alt: string} }[];
}
