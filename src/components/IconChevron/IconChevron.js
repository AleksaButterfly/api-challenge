import React from "react";
import { string } from "prop-types";

const ICON_HEIGHT = 12;
const ICON_WIDTH = 12;

const IconChevron = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      height={ICON_HEIGHT}
      width={ICON_WIDTH}
    >
      <path
        d="M10.15.5 4 6.65a.48.48 0 0 0 0 .7l6.15 6.15"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconChevron.defaultProps = {
  className: null,
};

IconChevron.protoTypes = {
  className: string,
};

export default IconChevron;
