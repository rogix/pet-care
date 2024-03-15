import Expert1 from '../assets/expert-1.png';
import Expert2 from '../assets/expert-2.png';
import Expert3 from '../assets/expert-3.png';
import Expert4 from '../assets/expert-4.png';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Youtube from '../assets/youtube.svg';

import { Typography } from '../shared/Typography';

export function Experts() {
	return (
		<section className="container py-28">
			<div className="mx-auto max-w-[800px]">
				<Typography variant="h2" className="mb-10 text-center text-teal">
					Meet Our Experts
				</Typography>
				<Typography variant="h3" className="mb-10 text-center text-5xl text-dark-gray">
					Committed to Nurturing Animal Happiness
				</Typography>
			</div>
			<section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
				<div>
					<img src={Expert1} alt="expert-1" />
					<Typography variant="h3" className="mt-5 text-center text-xl">
						Mark Davis
					</Typography>
					<Typography variant="p" className="text-center text-base text-light-red">
						Veterinarian
					</Typography>
					<div className="mt-3 flex justify-center gap-3">
						<img src={Facebook} alt="facebook" />
						<img src={Twitter} alt="twitter" />
						<img src={Youtube} alt="youtube" />
					</div>
				</div>
				<div>
					<img src={Expert2} alt="expert-2" />
					<Typography variant="h3" className="mt-5 text-center text-xl">
						Anna Smith
					</Typography>
					<Typography variant="p" className="text-center text-base text-light-red">
						Dog Trainer
					</Typography>
					<div className="mt-3 flex justify-center gap-3">
						<img src={Facebook} alt="facebook" />
						<img src={Twitter} alt="twitter" />
						<img src={Youtube} alt="youtube" />
					</div>
				</div>
				<div>
					<img src={Expert3} alt="expert-3" />
					<Typography variant="h3" className="mt-5 text-center text-xl">
						Alex Johnson
					</Typography>
					<Typography variant="p" className="text-center text-base text-light-red">
						Pet Groomer
					</Typography>
					<div className="mt-3 flex justify-center gap-3">
						<img src={Facebook} alt="facebook" />
						<img src={Twitter} alt="twitter" />
						<img src={Youtube} alt="youtube" />
					</div>
				</div>
				<div>
					<img src={Expert4} alt="expert-4" />
					<Typography variant="h3" className="mt-5 text-center text-xl">
						Emily Clark
					</Typography>
					<Typography variant="p" className="text-center text-base text-light-red">
						Cat Specialist
					</Typography>
					<div className="mt-3 flex justify-center gap-3">
						<img src={Facebook} alt="facebook" />
						<img src={Twitter} alt="twitter" />
						<img src={Youtube} alt="youtube" />
					</div>
				</div>
			</section>
		</section>
	);
}
