import CertifiedIcon from '../assets/certified-icon.png';
import CustomizedIcon from '../assets/custom-care-icon.png';
import VetIcon from '../assets/vet-recommend-icon.png';
import SafeIcon from '../assets/safe-and-love-icon.png';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export function ProductsList() {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<section className="container my-32 grid max-w-[500px] grid-cols-1 gap-7 sm:px-0 md:max-w-screen-2xl md:grid-cols-2 md:px-20 xl:grid-cols-4">
			{products.map((product, index) => (
				<motion.article
					key={index}
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={{
						visible: { y: 0, opacity: 1 },
						hidden: { y: 100, opacity: 0 }
					}}
					transition={{ delay: index * 0.1, duration: 0.8, ease: 'easeInOut' }}
					className={`flex flex-col items-center justify-center gap-5 rounded-lg border-t-4  p-5 text-center text-dark-gray shadow-lg`}
					style={{ borderColor: product.color }}
				>
					<img src={product.imgSrc} alt={product.imgAlt} />
					<h2 className="text-2xl">{product.title}</h2>
					<p className="font-readex text-base font-extralight">{product.content}</p>
				</motion.article>
			))}
		</section>
	);
}

const products = [
	{
		imgSrc: CertifiedIcon,
		imgAlt: 'certified',
		color: 'teal',
		title: 'Certified Professionals',
		content:
			'Our team of professionals are certified and trained to provide the best care for your pets.'
	},
	{
		imgSrc: CustomizedIcon,
		imgAlt: 'customized',
		color: 'orange',
		title: 'Customized Care',
		content: 'We offer customized care for your pets, ensuring that their unique needs are met.'
	},
	{
		imgSrc: VetIcon,
		imgAlt: 'vet',
		color: '#F27C86',
		title: 'Vet-Recommended',
		content: 'Our services are recommended by vets, ensuring that your pets are in good hands.'
	},
	{
		imgSrc: SafeIcon,
		imgAlt: 'safe',
		color: 'gold',
		title: 'Safe & Loving',
		content: 'We provide a safe and loving environment for your pets to ensure their well-being.'
	}
];
