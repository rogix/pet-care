import Logo from '../assets/logo.png';
import Phone from '../assets/telephone.png';

export function Header() {
	return (
		<header className="h-28 bg-[#FFF9F1] p-4 text-base text-[#4d4d4d]">
			<nav className="mx-auto flex max-w-[1300px] items-center justify-between">
				<div className="navbar bg-base-100">
					<div className="navbar-start">
						<div className="dropdown">
							<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box  bg-white p-2 shadow"
							>
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
						</div>
						<a className="btn btn-ghost text-xl" href="/">
							<img src={Logo} alt="logo" className="w-[100px] md:w-[210px]" />
						</a>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal mt-5 px-1">
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
					</div>
					<div className="navbar-end hidden sm:block">
						<div className="flex items-center justify-end gap-3">
							<img src={Phone} alt="phone" height="auto" />
							<div className="flex flex-col text-base">
								<span>Contact Us</span>
								<a href="tel:+1234567890" className="text-xl text-[#FF9315]">
									+123 456 7890
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
