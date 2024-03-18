import { AccordionItem } from '../shared/Accordion';
import DogCat from '../assets/dog-cat.png';
import DCIcon1 from '../assets/dc-icon-1.png';
import DCIcon2 from '../assets/dc-icon-2.png';
import DCIcon3 from '../assets/dc-icon-3.png';
import CountUpComponent from '../shared/CountUp';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export function Welcome() {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<section className="container flex max-w-[500px] justify-between gap-10 md:max-w-screen-2xl md:px-20">
			<div className="mb-20 flex flex-col gap-7 lg:px-40 2xl:w-[40%] 2xl:px-0">
				<article className="flex flex-col gap-7">
					<h2 className="font-readex text-teal">Welcome to Buddy Pet Care</h2>
					<h3 className="text-5xl text-dark-gray">Your Trusted Partner in Pet Wellness</h3>
					<p className="font-readex font-extralight">
						We are a team of pet lovers who are dedicated to ensuring that your pets are happy and
						healthy. We offer a range of services to cater to your pet's needs.
					</p>
				</article>
				<div className="flex flex-col gap-5">
					<AccordionItem
						title="Passionate Pet Care Professionals"
						content="Our team of professionals are passionate about providing the best care for your pets. We are dedicated to ensuring that your pets are happy and healthy."
						name="my-accordion-2"
						defaultChecked
					/>
					<AccordionItem
						title="Tailored Pet Care Services"
						content="We offer customized care for your pets, ensuring that their unique needs are met. Our services are tailored to cater to your pet's needs."
						name="my-accordion-2"
					/>
					<AccordionItem
						title="Personalized Pet Experiences"
						content="We provide personalized experiences for your pets, ensuring that they are comfortable and happy. Our team is dedicated to ensuring that your pets are well taken care of."
						name="my-accordion-2"
					/>
				</div>
			</div>
			<div className="relative hidden w-[700px] 2xl:block">
				<img
					src={DogCat}
					alt="dog-cat"
					className="absolute bottom-0 left-1/2 z-0 h-auto -translate-x-1/2 transform"
				/>
				<img src={DCIcon1} alt="dc-icon-1" className="absolute -left-5 bottom-60" />
				<img
					src={DCIcon2}
					alt="dc-icon-2"
					className="absolute left-1/2 top-10 -translate-x-3/4 transform"
				/>
				<img src={DCIcon3} alt="dc-icon-3" className="absolute bottom-32 right-0" />
				<span className="absolute right-48 top-40 -z-10 h-[400px] w-[400px] rounded-full bg-light-red" />
				<motion.article
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={{
						visible: { y: 0, opacity: 1 },
						hidden: { y: 100, opacity: 0 }
					}}
					transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
					className="absolute -left-10 bottom-20 z-20 flex h-[115px] w-[270px] flex-col items-center justify-center gap-2 rounded-lg border-t-4 border-teal bg-white p-5 text-center text-dark-gray shadow-lg"
				>
					<h2 className="flex text-5xl text-teal" ref={ref}>
						<CountUpComponent start={0} end={24} delay={0.5} duration={1.5} />+
					</h2>
					<p className="text-base">Trusted Partners</p>
				</motion.article>
				<motion.article
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={{
						visible: { y: 0, opacity: 1 },
						hidden: { y: 100, opacity: 0 }
					}}
					transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
					className="absolute right-10 top-56 z-20 flex h-[115px] w-[270px] flex-col items-center justify-center gap-2 rounded-lg border-t-4 border-gold bg-white p-5 text-center text-dark-gray shadow-lg"
				>
					<h2 className="flex text-5xl text-gold">
						<CountUpComponent start={0} end={129} delay={0.5} duration={1.5} />k
					</h2>
					<p className="text-base">Experience Field</p>
				</motion.article>
			</div>
		</section>
	);
}
