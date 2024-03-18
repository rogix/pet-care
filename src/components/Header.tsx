import Logo from '../assets/logo.png';
import Phone from '../assets/telephone.png';
import { NavLink } from 'react-router-dom';

const routes = [
	{ path: '/', name: 'Homepage' },
	{ path: '/about', name: 'About Us' },
	{ path: '/services', name: 'Services' },
	{ path: '/blog', name: 'Blog' },
	{ path: '/contact', name: 'Contact Us' },
	{ path: '/404', name: '404' }
];

export function Header() {
	return (
		<header className="h-28 bg-[#FFF9F1] py-4 text-base text-[#4d4d4d]">
			<nav className="mx-auto flex max-w-[1300px] items-center justify-between">
				<div className="navbar bg-base-100 px-0">
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
								{routes.map((route, index) => (
									<li key={index}>
										<NavLink
											to={route.path}
											className={({ isActive }) =>
												isActive ? 'text-light-red' : 'text-dark-gray hover:text-light-red'
											}
										>
											{route.name}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
						<a className="btn btn-ghost text-xl lg:mb-10" href="/">
							<img src={Logo} alt="logo" className="w-[100px] lg:w-[210px]" />
						</a>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal mt-5 px-1">
							{routes.map((route, index) => (
								<li key={index}>
									<NavLink
										to={route.path}
										className={({ isActive }) =>
											isActive ? 'text-light-red' : 'text-dark-gray hover:text-light-red'
										}
									>
										{route.name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
					<div className="navbar-end hidden sm:block">
						<div className="mr-10 flex items-center justify-end gap-3">
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
