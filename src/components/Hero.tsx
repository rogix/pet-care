import Line from '../assets/line.svg';
import Dog from '../assets/dog.png';
import CustomButton from '../shared/Button';

export function Hero() {
	return (
		<section className="bg-off-white flex h-[calc(100vh-112px)] items-center">
			<div className="mx-auto flex w-[1200px] items-center gap-10">
				<div className="relative w-[600px]">
					<img src={Line} alt="hero" className="relative h-auto w-full object-contain" />
					<img
						src={Dog}
						alt="dog"
						className="absolute left-10 top-10 h-auto w-[90%] object-contain"
					/>
				</div>
				<article className="flex h-[440px] flex-col justify-center">
					<h2 className="text-teal font-readex text-lg font-bold">Happy Pets, Happy Hearts</h2>
					<div className="text-dark-gray mb-6 w-[590px] text-left text-7xl font-bold capitalize leading-relaxed">
						Loving <span className="text-orange">pet caring</span> partners
					</div>
					<p className="text-gray font-readex max-w-96 text-sm">
						We are a team of pet lovers who are dedicated to ensuring that your pets are happy and
						healthy. We offer a range of services to cater to your pet's needs.
					</p>
					<CustomButton text="Make a Call" />
				</article>
			</div>
		</section>
	);
}
