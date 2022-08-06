import React from "react";
import { node } from "prop-types";

// Shared
import LoadingProgressBar from "./LoadingProgressBar";
import css from "./Page.module.css";

const Page = ({ children }) => {
  return (
    <div className={css.page}>
      <LoadingProgressBar />
      {children}
    </div>
  );
};

Page.defaultProps = {
  children: null,
};

Page.propTypes = {
  children: node.isRequired,
};

export default Page;
