import { AccordionItem } from '../shared/Accordion';
import DogCat from '../assets/dog-cat.png';
import DCIcon1 from '../assets/dc-icon-1.png';
import DCIcon2 from '../assets/dc-icon-2.png';
import DCIcon3 from '../assets/dc-icon-3.png';

export function Welcome() {
	return (
		<section className="container mx-auto flex justify-between gap-10">
			<div className="mb-10 mt-10 flex w-[40%] flex-col gap-7">
				<article className="flex flex-col gap-7">
					<h2 className="text-teal font-readex">Welcome to Buddy Pet Care</h2>
					<h3 className="text-dark-gray text-5xl">Your Trusted Partner in Pet Wellness</h3>
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
					className="absolute bottom-0 left-1/2 h-auto -translate-x-1/2 transform"
				/>
				<img src={DCIcon1} alt="dc-icon-1" className="absolute -left-5 bottom-60" />
				<img
					src={DCIcon2}
					alt="dc-icon-2"
					className="absolute left-1/2 top-10 -translate-x-3/4 transform"
				/>
				<img src={DCIcon3} alt="dc-icon-3" className="absolute bottom-32 right-0" />
				<span className="bg-light-red absolute right-36 top-40 -z-10 h-[400px] w-[400px] rounded-full" />
			</div>
		</section>
	);
}
