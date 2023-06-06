interface SmallSectionProps {
	color: string;
	align?: 'left' | 'center' | 'right';
	contentArray: { size: 'm' | 'l'; text?: string, image?: {src: string, alt: string} | undefined }[];
}
