import CatBath from '../assets/cat-bath.png';
import CatBubble from '../assets/cat-bubble.png';
import CatIcons from '../assets/cat-icons.png';
import CatLine from '../assets/cat-line.png';
import CustomButton from '../shared/Button';
import { Typography } from '../shared/Typography';

export function Feline() {
	return (
		<section className="container my-20">
			<div className="flex h-full gap-10">
				<div className="mt-10 w-1/5 pr-10">
					<Typography variant="h3" className="text-base text-dark-gray">
						Feline Friends
					</Typography>
					<span className="text-7xl text-orange">$18</span>
					<span className="text-dark-gray">/day</span>
					<Typography variant="p" className="text-base text-gray">
						Our feline friends are special and we understand that they require a different level of
						care.
					</Typography>
				</div>
				<div className="relative flex w-2/5 items-center justify-center">
					<img src={CatBath} alt="cat-bath" className="absolute" />
					<img src={CatBubble} alt="cat-bubble" className="absolute -left-10 bottom-0 z-10" />
					<img src={CatIcons} alt="cat-icons" className="absolute -top-28 right-40 z-10" />
					<img src={CatLine} alt="cat-line" className="absolute -top-3" />
				</div>
				<div className="flex w-2/5 flex-col gap-4">
					<Typography variant="h2">Perfect Plans</Typography>
					<Typography variant="h3">We Have the Perfect Plan for You</Typography>
					<Typography variant="p">
						Our plans are designed to cater to your cat's unique needs. We offer a range of services
						that ensure your cat is happy and healthy.
					</Typography>
					<CustomButton text="View All Prices" />
				</div>
			</div>
		</section>
	);
}
