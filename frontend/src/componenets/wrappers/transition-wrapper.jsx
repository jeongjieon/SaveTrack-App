import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import PropTypes from 'prop-types';

const TransitionWrapper = ({ children }) => {
  return (
    <Transition
      as={Fragment}
      enter='transition ease-out duration-100'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
    >
      {children}
    </Transition>
  );
};

TransitionWrapper.propTypes = {
  children: PropTypes.node.isRequired, // Changed to node
};

export default TransitionWrapper;
