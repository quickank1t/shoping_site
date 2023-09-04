import Body from "./Components/Body";
import Signup from "./Components/Signup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Error from "./Components/Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			errorElement: <Error />,
			element: <Body />,
		},
		{
			path: "/signup",
			element: <Signup />,
		},
		{
			path: "/cart",
			element: <Cart />,
		},
	]);
	return (
		<div>
			<Header />
			<RouterProvider router={router} />
			<Footer />
		</div>
	);
}

export default App;
