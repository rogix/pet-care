import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/fredoka-one';
// import '@fontsource/readex-pro';
import '@fontsource/readex-pro/200.css';
import '@fontsource/readex-pro/300.css';
import '@fontsource/readex-pro/400.css';
import './index.css';
import {
	Route,
	RouterProvider,
	Routes,
	createBrowserRouter,
	createRoutesFromElements
} from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { Page404 } from './pages/ErrorPage.tsx';
import { AboutUs } from './pages/AboutUs.tsx';
import { Root } from './pages/Root.tsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<Page404 />}>
			<Route index element={<Home />} />
			<Route path="about" element={<AboutUs />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
