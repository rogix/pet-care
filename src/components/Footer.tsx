import Logo from '../assets/logo.png';
import ArrowIcon from '../assets/arrow.svg';

export function Footer() {
	return (
		<section className="bg-off-white py-20">
			<footer className="container grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
				<div>
					<img src={Logo} alt="Logo" />
				</div>
				<div>
					<h3 className="text-2xl text-dark-gray">Contact Us</h3>
					<div className="font-readex font-extralight text-gray">
						<div className="py-4">
							<p>Call Us : 1 (123) 234 1234</p>
							<p>We are open from Monday to Friday</p>
							<p>00.90 AM - 17.00 PM</p>
						</div>
						<div>
							<p>1234 Main St</p>
							<p>Springfield, IL 62701</p>
						</div>
					</div>
				</div>

				<div>
					<h3 className="text-2xl text-dark-gray">Our Services</h3>
					<div className="flex flex-col gap-2 text-gray">
						<div className="mt-3 flex gap-2">
							<img src={ArrowIcon} alt="Arrow" />
							<span>Health Checkups</span>
						</div>
						<div className="flex gap-2">
							<img src={ArrowIcon} alt="Arrow" />
							<span>Grooming Care</span>
						</div>
						<div className="flex gap-2">
							<img src={ArrowIcon} alt="Arrow" />
							<span>Playful Activities</span>
						</div>
						<div className="flex gap-2">
							<img src={ArrowIcon} alt="Arrow" />
							<span>Nutritional Guidance</span>
						</div>
						<div className="flex gap-2">
							<img src={ArrowIcon} alt="Arrow" />
							<span>Training Programs</span>
						</div>
						<div className="flex gap-2">
							<img src={ArrowIcon} alt="Arrow" />
							<span>Safe Boarding</span>
						</div>
					</div>
				</div>
				<div>
					<h3 className="mb-3 text-2xl text-dark-gray">Subscribe Newsletter</h3>
					<form>
						<input
							type="email"
							placeholder="Email"
							className="mb-3 w-full rounded-full border-2 border-orange px-4 py-4"
						/>
						<button className="w-full rounded-full bg-light-red p-3 text-white">Subscribe</button>
					</form>
					<div className="pt-8">
						<h3 className="text-2xl text-dark-gray">Pet Clinic Hours</h3>
						<p className="font-readex font-extralight">
							Mon – Fri: 8:00 a.m. – 5:30 p.m. / Saturday: 8:00 a.m. – 3:30 p.m. / Sunday: Closed
						</p>
					</div>
				</div>
			</footer>
		</section>
	);
}
