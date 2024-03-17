type CardProps = {
	image?: string;
	altText: string;
	title: string;
	content: string;
	color?: Color;
};

type Color =
	| 'white'
	| 'off-white'
	| 'teal'
	| 'gray'
	| 'dark-gray'
	| 'gold'
	| 'orange'
	| 'light-red';

const colors: Record<Color, string> = {
	white: '#FFFFFF',
	'off-white': '#FFF9F1',
	teal: '#3AB4AC',
	gray: '#7A7A7A',
	'dark-gray': '#4D4D4D',
	gold: '#F7BA57',
	orange: '#FF9315',
	'light-red': '#F27C86'
};

export function Card({ image, altText, title, content, color = 'white' }: CardProps) {
	const currColor = colors[color];

	return (
		<article
			className={`border-${color} flex flex-col items-center justify-center gap-5 rounded-lg border-t-4 p-5 py-10 text-center text-dark-gray shadow-lg`}
		>
			{image && <img src={image} alt={altText} />}
			<h2 className="text-2xl">{title}</h2>
			<p className="font-readex text-base font-extralight">{content}</p>
			<div
				role="button"
				className={`flex h-10 items-center gap-3 rounded-lg p-4 text-light-red hover:bg-orange/10`}
			>
				<span className={`text-${color}`}>Learn more</span>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill={currColor}
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect x="16" width="16" height="16" rx="8" transform="rotate(90 16 0)" fill="current" />
					<path
						d="M6.66667 11.3334L10 8.00008L6.66667 4.66675"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</article>
	);
}
