import React from "react";
import { bool } from "prop-types";

// React Loading Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import css from "./Loader.module.css";

const SKELETON_ITEMS_COUNT = 6;

const LoaderItem = () => {
  return (
    <div className={css.singleLoaderContainer}>
      <Skeleton
        containerClassName={css.singleLoaderAvatarContainer}
        className={css.singleLoaderAvatar}
        circle
      />
      <Skeleton className={css.singleLoaderLine} count={3} />
    </div>
  );
};

const Loader = ({ show }) => {
  // Create an array of skeleton items
  const loaderArray = [...Array(SKELETON_ITEMS_COUNT).keys()];
  return show ? (
    <div className={css.loader}>
      {loaderArray.map((index) => {
        return <LoaderItem key={index} />;
      })}
    </div>
  ) : null;
};

Loader.defaultProps = {
  show: false
};

Loader.defaultProps = {
  show: bool.isRequired
};

export default Loader;
