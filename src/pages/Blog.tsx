import { BlogSection } from '../components/BlogSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PageCall } from '../components/PageCall';

export function Blog() {
	return (
		<div>
			<Header />
			<PageCall pageTitle="Blog" />
			<BlogSection totalPosts={6} />
			<Footer />
		</div>
	);
}
