import React from "react";
import { bool, string } from "prop-types";
import classNames from "classnames";

// React Loading Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import css from "./Loader.module.css";

const SKELETON_ITEMS_COUNT = 6;
const SKELETON_ITEM_COUNT = 3;
const SKELETON_BASE_COLOR = "rgba(255,255,255,.1)";
const SKELETON_HIGHLIGHTED_COLOR = "rgba(255,255,255,.2)";

const LoaderItem = () => {
  return (
    <div className={css.singleLoaderContainer}>
      <Skeleton
        containerClassName={css.singleLoaderAvatarContainer}
        className={css.singleLoaderAvatar}
        baseColor={SKELETON_HIGHLIGHTED_COLOR}
        highlightColor={SKELETON_HIGHLIGHTED_COLOR}
        enableAnimation={false}
        circle
      />
      <Skeleton
        className={css.singleLoaderLine}
        baseColor={SKELETON_BASE_COLOR}
        highlightColor={SKELETON_HIGHLIGHTED_COLOR}
        count={SKELETON_ITEM_COUNT}
      />
    </div>
  );
};

const Loader = (props) => {
  const { rootClassName, className, show, withMargin } = props;
  const classes = classNames(rootClassName || className, css.root, {
    [css.loaderWithMargin]: withMargin,
  });

  // Create an array of skeleton items
  const loaderArray = [...Array(SKELETON_ITEMS_COUNT).keys()];

  return show ? (
    <div className={classes}>
      {loaderArray.map((index) => {
        return <LoaderItem key={index} />;
      })}
    </div>
  ) : null;
};

Loader.defaultProps = {
  rootClassName: null,
  className: null,
  show: false,
  withMargin: false,
};

Loader.defaultProps = {
  rootClassName: string,
  className: string,
  show: bool.isRequired,
  withMargin: bool,
};

export default Loader;
