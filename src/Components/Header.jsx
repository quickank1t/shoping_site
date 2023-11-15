import { Disclosure } from "@headlessui/react";
import {
  CartAndProfile,
  MobileHamburger,
  MobileNavigation,
  BrowserNavigation,
} from "./navbar";

import { SignOutButton, RedirectToSignIn } from "@clerk/clerk-react";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Profile", href: "/profile", current: false },
];

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <MobileHamburger open={open} />
              <BrowserNavigation navigation={navigation} />
              <div>
                <CartAndProfile />
              </div>
            </div>
          </div>
          <MobileNavigation navigation={navigation} />
        </>
      )}
    </Disclosure>
  );
}
