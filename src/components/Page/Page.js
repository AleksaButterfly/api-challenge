import React from "react";
import { node, string } from "prop-types";

// External
import classNames from "classnames";

// Shared
import LoadingProgressBar from "./LoadingProgressBar";
import css from "./Page.module.css";

const Page = (props) => {
  const { rootClassName, className, children } = props;
  const classes = classNames(rootClassName || className, css.root);
  return (
    <div className={classes}>
      <LoadingProgressBar />
      {children}
    </div>
  );
};

Page.defaultProps = {
  rootClassName: null,
  className: null,
  children: null,
};

Page.propTypes = {
  rootClassName: string,
  className: string,
  children: node.isRequired,
};

export default Page;
