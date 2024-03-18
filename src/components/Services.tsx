import { Card } from '../shared/Card';
import HealthIcon from '../assets/health-icon.png';
import GroomingIcon from '../assets/grooming-icon.png';
import PlayfulIcon from '../assets/playful-icon.png';
import SafeIcon from '../assets/safe-icon.png';
import NutritionIcon from '../assets/nutrition-icon.png';
import TrainingIcon from '../assets/training-icon.png';

export function ServicesSection() {
	return (
		<section className="container my-20 max-w-[500px] md:max-w-screen-2xl">
			<div className="mx-auto my-20 flex max-w-[815px] flex-col items-center justify-center gap-5">
				<h2 className="font-readex font-bold text-teal">Pet Care Services</h2>
				<h3 className="text-center text-5xl leading-normal text-dark-gray">
					Indulgent Spa Treatments Tailored for Pets
				</h3>
			</div>

			<section className="grid grid-cols-1 gap-10 md:px-20 lg:grid-cols-2 xl:grid-cols-3">
				<Card
					image={HealthIcon}
					altText="health"
					title="Health Checkups"
					content="We offer health checkups for your pets to ensure that they are healthy and happy."
					color="teal"
				/>
				<Card
					image={GroomingIcon}
					altText="grooming"
					title="Grooming Care"
					content="We offer grooming services for your pets to ensure that they are clean and healthy."
					color="orange"
				/>
				<Card
					image={PlayfulIcon}
					altText="playful"
					title="Playful Activities"
					content="We offer playful activities for your pets to ensure that they are happy and healthy."
					color="gold"
				/>
				<Card
					image={NutritionIcon}
					altText="nutrition"
					title="Nutritional Guidance"
					content="We offer nutritional guidance for your pets to ensure that they are healthy and happy."
					color="orange"
				/>
				<Card
					image={TrainingIcon}
					altText="training"
					title="Training Programs"
					content="We offer training programs for your pets to ensure that they are well-behaved and happy."
					color="gold"
				/>
				<Card
					image={SafeIcon}
					altText="safe"
					title="Safe Boarding"
					content="We offer safe boarding services for your pets to ensure that they are comfortable and happy."
					color="teal"
				/>
			</section>
		</section>
	);
}
