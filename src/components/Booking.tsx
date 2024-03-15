import Woman from '../assets/woman-dogs.png';
import CustomButton from '../shared/Button';

export function BookingSection() {
	return (
		<section className="flex bg-teal">
			<div className="relative mx-auto flex h-[678px] w-[85%] justify-center gap-5 bg-teal">
				<div className="relative hidden w-[570px] lg:block">
					<img src={Woman} alt="woman holding dogs" className="absolute bottom-0 left-0" />
				</div>
				<article className="flex max-w-[500px] flex-col justify-center gap-5">
					<h2 className="font-readex text-xl text-gold">Book Now for Tailored Care</h2>
					<h3 className="text-4xl font-bold text-white">
						Book a Service Now & Start Pampering your Pet!
					</h3>
					<p className="font-readex text-base text-white">
						We offer a range of services to cater to your pet's needs. Book a service now and start
						pampering your pet!
					</p>

					<CustomButton text="Book Now" />
				</article>
			</div>
		</section>
	);
}
