import React from "react";
import { string } from "prop-types";

// Shared
import css from "./Heading.module.css";

const Heading = ({ headingText }) => {
  if (!headingText) {
    throw new Error("headingText is required.");
  }
  return (
    <h2 className={css.heading}>
      <span className={css.headingText}>{headingText}</span>
    </h2>
  );
};

Heading.defaultProps = {
  headingText: null
};

Heading.protoTypes = {
  headingText: string.isRequired
};

export default Heading;
