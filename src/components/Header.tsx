import Logo from '../assets/logo.png';
import Phone from '../assets/telephone.png';

export function Header() {
	return (
		<header className="h-28 bg-[#FFF9F1] p-4 text-base text-[#4d4d4d]">
			<nav className="mx-auto flex max-w-[1300px] items-center justify-between">
				<div>
					<a href="/">
						<img src={Logo} alt="logo" width={210} />
					</a>
				</div>
				<ul className="flex gap-14 text-base">
					<li>
						<a href="/" className="text-light-red">
							Homepage
						</a>
					</li>
					<li>
						<a href="/about" className="hover:text-light-red">
							About Us
						</a>
					</li>
					<li>
						<a href="/contact" className="hover:text-light-red">
							Service
						</a>
					</li>
					<li>
						<a href="/contact" className="hover:text-light-red">
							Pages
						</a>
					</li>
					<li>
						<a href="/contact" className="hover:text-light-red">
							Blog
						</a>
					</li>
					<li>
						<a href="/contact" className="hover:text-light-red">
							Contact Us
						</a>
					</li>
				</ul>
				<div className="flex items-center gap-3">
					<img src={Phone} alt="phone" height="auto" />
					<div className="flex flex-col text-base">
						<span>Contact Us</span>
						<a href="tel:+1234567890" className="text-xl text-[#FF9315]">
							+123 456 7890
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
}
