import { Typography } from '../shared/Typography';
import Blog1 from '../assets/blog-1.jpeg';
import Blog2 from '../assets/blog-2.jpeg';
import Blog3 from '../assets/blog-3.jpeg';
import Blog4 from '../assets/blog-4.jpeg';
import Blog5 from '../assets/blog-5.jpeg';
import Blog6 from '../assets/blog-6.jpeg';
import BlogPost from '../shared/BlogPost';

export function BlogSection({ totalPosts }: { totalPosts: number }) {
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
				{blogPosts.slice(0, totalPosts).map((post, index) => (
					<BlogPost
						key={index}
						imgSrc={post.imgSrc}
						imgAlt={post.imgAlt}
						date={post.date}
						readTime={post.readTime}
						title={post.title}
						content={post.content}
					/>
				))}
			</section>
		</section>
	);
}

const blogPosts = [
	{
		imgSrc: Blog1,
		imgAlt: 'Blog post',
		date: 'August, 6, 2021',
		readTime: '3 min read',
		title: 'Understanding Pet Nutrition: What Every Owner Should Know',
		content:
			'As a pet owner, it is important to understand the nutritional needs of your pet. In this article, we explore the basics of pet nutrition and provide tips for ensuring your pet is getting the right nutrients.'
	},
	{
		imgSrc: Blog2,
		imgAlt: 'Blog post',
		date: 'July, 8, 2024',
		readTime: '3 min read',
		title: 'The Benefits of Regular Exercise for Your Pet',
		content:
			"Regular exercise is important for your pet's health and well-being. In this article, we explore the benefits of regular exercise for your pet and provide tips for keeping your pet active and healthy."
	},
	{
		imgSrc: Blog3,
		imgAlt: 'Blog post',
		date: 'August, 6, 2021',
		readTime: '3 min read',
		title: 'Understanding Pet Nutrition: What Every Owner Should Know',
		content:
			'As a pet owner, it is important to understand the nutritional needs of your pet. In this article, we explore the basics of pet nutrition and provide tips for ensuring your pet is getting the right nutrients.'
	},
	{
		imgSrc: Blog4,
		imgAlt: 'Blog post',
		date: 'August, 6, 2021',
		readTime: '3 min read',
		title: 'Understanding Pet Nutrition: What Every Owner Should Know',
		content:
			'As a pet owner, it is important to understand the nutritional needs of your pet. In this article, we explore the basics of pet nutrition and provide tips for ensuring your pet is getting the right nutrients.'
	},
	{
		imgSrc: Blog5,
		imgAlt: 'Blog post',
		date: 'July, 8, 2024',
		readTime: '3 min read',
		title: 'The Benefits of Regular Exercise for Your Pet',
		content:
			"Regular exercise is important for your pet's health and well-being. In this article, we explore the benefits of regular exercise for your pet and provide tips for keeping your pet active and healthy."
	},
	{
		imgSrc: Blog6,
		imgAlt: 'Blog post',
		date: 'August, 6, 2021',
		readTime: '3 min read',
		title: 'Understanding Pet Nutrition: What Every Owner Should Know',
		content:
			'As a pet owner, it is important to understand the nutritional needs of your pet. In this article, we explore the basics of pet nutrition and provide tips for ensuring your pet is getting the right nutrients.'
	}
];
