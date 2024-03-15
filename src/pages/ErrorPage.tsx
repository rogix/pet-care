import BgError from '../assets/bg-error.png';
import LazyCat from '../assets/lazy-cat.jpeg';
import CustomButton from '../shared/Button';

export function Page404() {
	return (
		<div className="w-screen">
			<div className="relative h-screen w-screen overflow-hidden">
				<img
					src={LazyCat}
					alt="lazy-cat"
					className="absolute left-0 z-0 h-screen w-full object-cover"
				/>
				<img src={BgError} alt="error" className="absolute z-10 h-[100vh] w-screen object-cover" />
			</div>
			<div className="absolute right-10 top-[40%] z-20 md:right-[300px] ">
				<h1 className="font-readex  text-8xl font-bold text-white">404</h1>
				<h2 className="text-4xl font-bold text-white">Page Not Found</h2>
				<p className="py-2 font-readex text-xl text-white">
					The page you are looking for does not exist.
				</p>
				<a href="/" className="text-white">
					<CustomButton text="Back to Home" />
				</a>
			</div>
		</div>
	);
}
