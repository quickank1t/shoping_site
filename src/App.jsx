import Body from "./Components/Body";
import Signup from "./Components/Signup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
	throw new Error("Missing Key");
}

const clerkKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

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
			<ClerkProvider publishableKey={clerkKey}>
				<Header />
				<RouterProvider router={router} />
				<Footer />
			</ClerkProvider>
		</div>
	);
}

export default App;
