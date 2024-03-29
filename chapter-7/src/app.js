import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Career from './components/Career';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const FoodOrderApp = () => (
	<>
		<Header />
		<Outlet />
		<Footer />
	</>
);

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <FoodOrderApp />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Body />
			},
			{
				path: '/about',
				element: <About />
			},
			{
				path: '/career',
				element: <Career />
			},
			{
				path: '/restaurant/:rest_id',
				element: <RestaurantMenu />
			}
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);