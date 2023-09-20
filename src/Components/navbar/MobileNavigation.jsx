import { Disclosure } from "@headlessui/react";
import { classNames } from "../../lib";
import PropTypes from "prop-types";

export default function MobileNavigation({ ...props }) {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {props.navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
        <Disclosure.Button
          key="login"
          as="a"
          href="#"
          className={classNames(
            "text-gray-300 hover:bg-gray-700 hover:text-white",
            "block rounded-md px-3 py-2 text-base font-medium"
          )}
          aria-current={undefined}
        >
          Log in
        </Disclosure.Button>
      </div>
    </Disclosure.Panel>
  );
}

MobileNavigation.propTypes = {
  navigation: PropTypes.array,
};

const props = {
  navigation: [
    { name: "Home", href: "/", current: true },
    { name: "Profile", href: "/profile", current: false },
  ],
};

PropTypes.checkPropTypes(
  MobileNavigation.propTypes,
  props,
  "prop",
  MobileNavigation
);
