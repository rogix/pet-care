import Line from '../assets/line.svg';
import Dog from '../assets/dog.png';
import CustomButton from '../shared/Button';

export function Hero() {
	return (
		<section className="flex h-[calc(100vh-112px)] items-center bg-off-white">
			<div className="mx-auto flex w-[1200px] items-center gap-10">
				<div className="relative hidden w-[600px] lg:block">
					<img src={Line} alt="hero" className="relative h-auto w-full object-contain" />
					<img
						src={Dog}
						alt="dog"
						className="absolute left-10 top-10 h-auto w-[90%] object-contain"
					/>
				</div>
				<article className="flex h-[440px] flex-col justify-center p-5 md:p-0">
					<h2 className="font-readex text-lg font-bold text-teal">Happy Pets, Happy Hearts</h2>
					<div className="mb-6 text-left text-4xl font-bold capitalize leading-relaxed text-dark-gray md:w-[590px] md:text-7xl">
						Loving <span className="text-orange">pet caring</span> partners
					</div>
					<p className="max-w-96 font-readex text-sm text-gray">
						We are a team of pet lovers who are dedicated to ensuring that your pets are happy and
						healthy. We offer a range of services to cater to your pet's needs.
					</p>
					<CustomButton text="Make a Call" />
				</article>
			</div>
		</section>
	);
}
