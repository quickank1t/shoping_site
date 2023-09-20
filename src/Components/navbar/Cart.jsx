import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  function handelClick() {
    navigate("/cart");
  }
  return (
    <button
      type="button"
      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      onClick={handelClick}
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View shopping cart</span>
      <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
