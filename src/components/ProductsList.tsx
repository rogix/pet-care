import CertifiedIcon from '../assets/certified-icon.png';
import CustomizedIcon from '../assets/custom-care-icon.png';
import VetIcon from '../assets/vet-recommend-icon.png';
import SafeIcon from '../assets/safe-and-love-icon.png';

export function ProductsList() {
	return (
		<section className="container my-20 grid max-w-[500px] grid-cols-1 gap-7 sm:px-0 md:max-w-screen-2xl md:grid-cols-2 md:px-20 xl:grid-cols-4">
			<article className="flex flex-col items-center justify-center gap-5 rounded-lg border-t-4 border-teal p-5 text-center text-dark-gray shadow-lg">
				<img src={CertifiedIcon} alt="certified" />
				<h2 className="text-2xl">Certified Professionals</h2>
				<p className="font-readex text-base font-extralight">
					Our team of professionals are certified and trained to provide the best care for your
					pets.
				</p>
			</article>
			<article className="flex flex-col items-center justify-center gap-5 rounded-lg border-t-4 border-orange p-5 text-center text-dark-gray shadow-lg">
				<img src={CustomizedIcon} alt="customized" />
				<h2 className="text-2xl">Customized Care</h2>
				<p className="font-readex text-base font-extralight">
					We offer customized care for your pets, ensuring that their unique needs are met.
				</p>
			</article>
			<article className="flex flex-col items-center justify-center gap-5 rounded-lg border-t-4 border-light-red p-5 text-center text-dark-gray shadow-lg">
				<img src={VetIcon} alt="vet" />
				<h2 className="text-2xl">Vet-Recommended</h2>
				<p className="font-readex text-base font-extralight">
					Our services are recommended by vets, ensuring that your pets are in good hands.
				</p>
			</article>
			<article className="flex flex-col items-center justify-center gap-5 rounded-lg border-t-4 border-gold p-5 text-center text-dark-gray shadow-lg">
				<img src={SafeIcon} alt="safe" />
				<h2 className="text-2xl">Safe & Loving</h2>
				<p className="font-readex text-base font-extralight">
					We provide a safe and loving environment for your pets to ensure their well-being.
				</p>
			</article>
		</section>
	);
}
