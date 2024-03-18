type BlogPostProps = {
	imgSrc: string;
	imgAlt: string;
	date: string;
	readTime: string;
	title: string;
	content: string;
};

const BlogPost: React.FC<BlogPostProps> = ({ imgSrc, imgAlt, date, readTime, title, content }) => {
	return (
		<article className="rounded-md bg-off-white">
			<div>
				<img src={imgSrc} alt={imgAlt} className="rounded-t-md" />
			</div>
			<div className="flex flex-col gap-5 p-5">
				<div className="flex justify-between font-readex font-extralight text-orange">
					<span>{date}</span>
					<span>{readTime}</span>
				</div>
				<h3 className="text-xl text-dark-gray">{title}</h3>
				<p className="font-readex font-extralight text-gray">{content}</p>
			</div>
		</article>
	);
};

export default BlogPost;
