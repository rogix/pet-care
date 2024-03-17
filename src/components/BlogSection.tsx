import { Typography } from '../shared/Typography';
import Blog1 from '../assets/blog-1.jpeg';
import Blog2 from '../assets/blog-2.jpeg';
import Blog3 from '../assets/blog-3.jpeg';

export function BlogSection() {
	return (
		<section className="container my-20 md:px-20">
			<div className="my-10 flex flex-col items-center justify-center gap-6">
				<Typography variant="h2">Our Blog</Typography>
				<Typography
					variant="h3"
					className="max-w-[700px] text-center text-5xl leading-normal text-dark-gray"
				>
					Exploring the Latest Trends in Pet lovers
				</Typography>
			</div>
			<section className="grid grid-cols-1  gap-10 lg:grid-cols-3">
				<article className="rounded-md bg-off-white">
					<div>
						<img src={Blog1} alt="Blog post" className="rounded-t-md" />
					</div>
					<div className="flex flex-col gap-5 p-5">
						<div className="flex justify-between font-readex font-extralight text-orange">
							<span>August, 6, 2021</span>
							<span>3 min read</span>
						</div>
						<h3 className="text-xl text-dark-gray">
							Understanding Pet Nutrition: What Every Owner Should Know
						</h3>
						<p className="font-readex font-extralight text-gray">
							As a pet owner, it is important to understand the nutritional needs of your pet. In
							this article, we explore the basics of pet nutrition and provide tips for ensuring
							your pet is getting the right nutrients.
						</p>
					</div>
				</article>
				<article className="rounded-md bg-off-white">
					<div>
						<img src={Blog2} alt="Blog post" className="rounded-t-md" />
					</div>
					<div className="flex flex-col gap-5 p-5">
						<div className="flex justify-between font-readex font-extralight text-orange">
							<span>August, 6, 2021</span>
							<span>3 min read</span>
						</div>
						<h3 className="text-xl text-dark-gray">
							Understanding Pet Nutrition: What Every Owner Should Know
						</h3>
						<p className="font-readex font-extralight text-gray">
							As a pet owner, it is important to understand the nutritional needs of your pet. In
							this article, we explore the basics of pet nutrition and provide tips for ensuring
							your pet is getting the right nutrients.
						</p>
					</div>
				</article>
				<article className="rounded-md bg-off-white">
					<div>
						<img src={Blog3} alt="Blog post" className="rounded-t-md" />
					</div>
					<div className="flex flex-col gap-5 p-5">
						<div className="flex justify-between font-readex font-extralight text-orange">
							<span>August, 6, 2021</span>
							<span>3 min read</span>
						</div>
						<h3 className="text-xl text-dark-gray">
							Understanding Pet Nutrition: What Every Owner Should Know
						</h3>
						<p className="font-readex font-extralight text-gray">
							As a pet owner, it is important to understand the nutritional needs of your pet. In
							this article, we explore the basics of pet nutrition and provide tips for ensuring
							your pet is getting the right nutrients.
						</p>
					</div>
				</article>
			</section>
		</section>
	);
}
