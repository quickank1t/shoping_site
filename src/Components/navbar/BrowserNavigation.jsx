import { Link } from "react-router-dom";
import { classNames } from "../../lib";
import PropTypes from "prop-types";

export default function BrowserNavigation({ ...props }) {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {props.navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

BrowserNavigation.propTypes = {
  navigation: PropTypes.array,
};

const props = {
  navigation: [
    { name: "Home", href: "/", current: true },
    { name: "Profile", href: "/profile", current: false },
  ],
};

PropTypes.checkPropTypes(
  BrowserNavigation.propTypes,
  props,
  "prop",
  BrowserNavigation
);
