import { AccordionItem } from '../shared/Accordion';
import DogCat from '../assets/dog-cat.png';
import DCIcon1 from '../assets/dc-icon-1.png';
import DCIcon2 from '../assets/dc-icon-2.png';
import DCIcon3 from '../assets/dc-icon-3.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export function Welcome() {
	const { ref, inView } = useInView({
		triggerOnce: true
	});

	return (
		<section className="container flex justify-between gap-10">
			<div className="mb-10 mt-10 flex w-[40%] flex-col gap-7">
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
			<div className="relative w-[50%]">
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
				<span className="absolute right-36 top-40 -z-10 h-[400px] w-[400px] rounded-full bg-light-red" />
				<article
					ref={ref}
					className="absolute -left-10 bottom-20 z-20 flex h-[115px] w-[270px] flex-col items-center justify-center gap-2 rounded-lg border-t-4 border-teal bg-white p-5 text-center text-dark-gray shadow-lg"
				>
					<h2 className="text-5xl text-teal">
						<CountUp start={0} end={24} delay={0.5} duration={1.5}>
							{({ countUpRef, start }) => {
								if (inView) {
									start();
								}
								return <span ref={countUpRef} />;
							}}
						</CountUp>
						+
					</h2>
					<p className="text-base">Trusted Partners</p>
				</article>
				<article
					ref={ref}
					className="absolute right-0 top-52 z-20 flex h-[115px] w-[270px] flex-col items-center justify-center gap-2 rounded-lg border-t-4 border-gold bg-white p-5 text-center text-dark-gray shadow-lg"
				>
					<h2 className="text-5xl text-gold">
						<CountUp start={0} end={129} delay={0.5} duration={1.5}>
							{({ countUpRef, start }) => {
								if (inView) {
									start();
								}
								return <span ref={countUpRef} />;
							}}
						</CountUp>
						k
					</h2>
					<p className="text-base">Experience Field</p>
				</article>
			</div>
		</section>
	);
}
