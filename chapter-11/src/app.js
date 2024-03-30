import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Career from "./components/Career";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const LazyGrocery = lazy(() => import("./components/Grocery"));

const FoodOrderApp = () => (
	<>
		<Header />
		<Outlet />
		<Footer />
	</>
);

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <FoodOrderApp />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/career",
				element: <Career />,
			},
			{
				path: "/restaurant/:rest_id",
				element: <RestaurantMenu />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<h1>Loading Grocery component...</h1>}>
						<LazyGrocery />
					</Suspense>
				),
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
