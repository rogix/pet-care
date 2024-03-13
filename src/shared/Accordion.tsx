type AccordionItemProps = {
	title: string;
	content: string;
	name: string;
	defaultChecked?: boolean;
};

export function AccordionItem({
	title,
	content,
	name,
	defaultChecked = false
}: AccordionItemProps) {
	return (
		<div className="collapse-arrow collapse">
			<input type="radio" name={name} defaultChecked={defaultChecked} />
			<div className="collapse-title text-dark-gray bg-off-white border-b-light-red mb-5 rounded-md border-b-2 text-xl font-medium">
				{title}
			</div>
			<div className="collapse-content font-readex text-sm font-extralight text-gray-500">
				<p>{content}</p>
			</div>
		</div>
	);
}
