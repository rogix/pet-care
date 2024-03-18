type CardProps = {
	step: string;
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

export function StepCard({ step, title, content, color = 'white' }: CardProps) {
	return (
		<article
			className={`border-${color} relative flex flex-col items-center justify-center gap-5 rounded-lg border-t-4 p-5 py-10 text-center text-dark-gray shadow-lg`}
		>
			<span
				className={`absolute -top-11 flex h-[90px] w-[90px] items-center justify-center rounded-full bg-${color} text-3xl text-white`}
			>
				{step}
			</span>
			<h2 className="mt-6 text-2xl">{title}</h2>
			<p className="font-readex text-base font-extralight">{content}</p>
		</article>
	);
}
