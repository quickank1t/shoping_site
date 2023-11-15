import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";
export default function Home() {
  // if (!import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEYY) {
  //   throw new Error("Missing Publishable Key");
  // }
  const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY;

  return (
    // <ClerkProvider publishableKey={clerkPubKey}>
    //   <SignedIn>Hello SignedIn</SignedIn>
    //   <SignedOut>
    //     <RedirectToSignIn />
    //   </SignedOut>
    // </ClerkProvider>
    <>Hello</>
  );
}
