type CardProps = {
	image?: string;
	altText: string;
	title: string;
	content: string;
	borderColor: string;
};

export function Card({ image, altText, title, content, borderColor }: CardProps) {
	return (
		<article
			className={`${borderColor} text-dark-gray flex flex-col items-center justify-center gap-5 rounded-lg border-t-4 p-5 text-center shadow-lg`}
		>
			{image && <img src={image} alt={altText} />}
			<h2 className="text-2xl">{title}</h2>
			<p className="font-readex text-base font-extralight">{content}</p>
		</article>
	);
}
