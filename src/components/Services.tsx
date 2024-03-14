import { Card } from '../shared/Card';
import HealthIcon from '../assets/health-icon.png';
import GroomingIcon from '../assets/grooming-icon.png';
import PlayfulIcon from '../assets/playful-icon.png';
import SafeIcon from '../assets/safe-icon.png';
import NutritionIcon from '../assets/nutrition-icon.png';
import TrainingIcon from '../assets/training-icon.png';

export function ServicesSection() {
	return (
		<section className="container my-20">
			<div className="mx-auto my-20 flex max-w-[815px] flex-col items-center justify-center gap-5">
				<h2 className="font-readex text-teal font-bold">Pet Care Services</h2>
				<h3 className="text-dark-gray text-center text-5xl leading-normal">
					Indulgent Spa Treatments Tailored for Pets
				</h3>
			</div>

			<section className="grid grid-cols-3 gap-5">
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
					color="light-red"
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
					color="light-red"
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
