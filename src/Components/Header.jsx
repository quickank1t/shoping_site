import { useState } from "react";
import Logo from "../assets/logo.jpg";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="">
      <nav className="p-6">
        <div className="max-w-full w-3/4 mx-auto my-0 flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="" className="w-36" />
          </a>

          <ul className="hidden lg:flex gap-6">
            <li className=" text-veryDarkBlue font-medium">ABOUT</li>
            <li className=" text-veryDarkBlue font-medium">CONTACT</li>
            <li className=" text-veryDarkBlue font-medium">PRICING</li>
          </ul>
          <a href="/signup">
            <button className="hidden lg:block bg-black text-white px-6 py-1 rounded-full cursor-pointer">
              Cart
            </button>
          </a>
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {!isMenuOpen ? (
              <RxHamburgerMenu size={27} />
            ) : (
              <RxCross1 size={27} />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col mt-7 items-center justify-center gap-y-3">
            <ul className=" bg-white h-60 w-full flex flex-col justify-center items-center gap-y-7 shadow-md rounded-md">
              <li className=" text-veryDarkBlue">ABOUT</li>
              <li className=" text-veryDarkBlue">CONTACT</li>
              <li className=" text-veryDarkBlue">PRICING</li>
              <a href="/cart">
                <li className="bg-black text-white px-6 py-1 rounded-full cursor-pointer">
                  Cart
                </li>
              </a>
              {/* <a href="/signup">
                <li className="bg-black text-white px-6 py-1 rounded-full cursor-pointer">
                  Signup
                </li>
              </a> */}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
