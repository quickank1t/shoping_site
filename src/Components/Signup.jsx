import {
	SignedIn,
	SignedOut,
	// UserButton,
	// useUser,
	RedirectToSignIn,
} from "@clerk/clerk-react";

export default function Signup() {
	return (
		<div>
			<SignedIn>
				<h1>Hello you are Signed in</h1>
			</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</div>
	);
}
