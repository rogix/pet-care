import LineTestimonials from '../assets/line-testimonial.png';
import ManDogs from '../assets/man-dogs.png';
import QuoteLeft from '../assets/quote-left.png';
import Paws from '../assets/paws.png';
import Shadow from '../assets/shadow-testimonial.png';
import Sara from '../assets/sara.jpeg';

export function Testimonials() {
	return (
		<section className="h-screen">
			<div className="container relative flex h-full flex-col items-center justify-between md:flex-row">
				<div className="flex w-full max-w-[600px] flex-col gap-5 md:w-2/4">
					<h2 className="text-teal">Glowing Coats & Wagging Tails</h2>
					<h3 className="text-5xl text-dark-gray">Grooming Testimonials That Speak Volumes</h3>
					<p className="font-readex text-base">
						We have been taking our dog to Pet Grooming for the past year. We are always very happy
						with the results and the friendly service. I highly recommend Pet Grooming to anyone
						looking for a professional groomer.
					</p>
					<section className="h-320 flex w-full flex-col gap-5 rounded-md border-2 border-gold p-10 text-center md:w-[600px]">
						<div className="font-readex text-2xl text-gray">
							"I'm so grateful to Buddy for taking exceptional care of my furry friend. Their team's
							dedication and expertise ensure my pet is always in safe hands."
						</div>
						<div className="flex items-center justify-center gap-3">
							<img src={Sara} alt="sara" className="h-20 w-20 rounded-full" />
							<div className="">
								<h4 className="text-dark-gray">Sarah Johnson</h4>
								<p className="text-light-red">Animal Lover</p>
							</div>
						</div>
					</section>
				</div>
				<div className="relative hidden h-[700px] w-2/4 lg:block">
					<img src={Shadow} alt="" className="absolute z-0" />
					<img src={ManDogs} alt="" className="absolute z-10" />
					<img src={LineTestimonials} alt="line" className="absolute z-20" />
					<img src={QuoteLeft} alt="" className="absolute bottom-20 left-10 z-30" />
					<img src={Paws} alt="" className="absolute right-32 top-0" />
				</div>
			</div>
		</section>
	);
}
