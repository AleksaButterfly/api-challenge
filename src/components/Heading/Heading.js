import React from "react";
import { string } from "prop-types";

// External
import classNames from "classnames";

// Shared
import css from "./Heading.module.css";

const Heading = (props) => {
  const { rootClassName, className, headingText } = props;
  const classes = classNames(rootClassName || className, css.root);

  if (!headingText) {
    throw new Error("headingText is required.");
  }
  return (
    <h2 className={classes}>
      <span className={css.headingText}>{headingText}</span>
    </h2>
  );
};

Heading.defaultProps = {
  rootClassName: null,
  className: null,
  headingText: null,
};

Heading.protoTypes = {
  rootClassName: string,
  className: string,
  headingText: string.isRequired,
};

export default Heading;
