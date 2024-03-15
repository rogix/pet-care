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
		<div className="collapse collapse-arrow">
			<input type="radio" name={name} defaultChecked={defaultChecked} />
			<div className="collapse-title mb-5 rounded-lg rounded-b-2xl border-b-4 border-b-light-red bg-off-white text-xl font-medium text-dark-gray">
				{title}
			</div>
			<div className="text-gray-500 collapse-content font-readex text-sm font-extralight">
				<p>{content}</p>
			</div>
		</div>
	);
}
