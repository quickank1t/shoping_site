import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import PropTypes from "prop-types";

export default function MobileHamburger({ ...props }) {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        {props.open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
  );
}
MobileHamburger.propTypes = {
  open: PropTypes.bool,
};

const props = {
  open: true,
};

PropTypes.checkPropTypes(
  MobileHamburger.propTypes,
  props,
  "prop",
  MobileHamburger
);
