import { BookingSection } from '../components/Booking';
import { Experts } from '../components/Experts';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Numbers } from '../components/Numbers';
import { PageCall } from '../components/PageCall';
import { Steps } from '../components/Steps';
import { Testimonials } from '../components/Testimonials';
import { Welcome } from '../components/Welcome';

export function AboutUs() {
	return (
		<div>
			<Header />
			<PageCall pageTitle="About Us" />
			<Welcome />
			<Numbers />
			<Steps />
			<Testimonials />
			<BookingSection />
			<Experts />
			<Footer />
		</div>
	);
}
