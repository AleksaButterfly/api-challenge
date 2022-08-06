import React from "react";
import { string } from "prop-types";

const ICON_HEIGHT = 16;
const ICON_WIDTH = 16;

const IconEmail = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      height={ICON_HEIGHT}
      width={ICON_WIDTH}
    >
      <path
        d="M.5 1.75h13v10.5H.5Z"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m.5 3.015 5.855 4.941a1 1 0 0 0 1.29 0L13.5 3.015"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconEmail.defaultProps = {
  className: null
};

IconEmail.protoTypes = {
  className: string
};

export default IconEmail;
