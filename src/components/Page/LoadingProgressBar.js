import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// External
import LoadingBar from "react-top-loading-bar";

// Shared
import css from "./Page.module.css";

const LOADING_BAR_COLOR = "#55f";
const LOADING_BAR_HEIGHT = 4;
const LOADING_BAR_SPEED = 1500;

const LoadingProgressBar = () => {
  const location = useLocation();

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(100);
  }, [location]);
  return (
    <LoadingBar
      containerClassName={css.loadingBar}
      color={LOADING_BAR_COLOR}
      height={LOADING_BAR_HEIGHT}
      loaderSpeed={LOADING_BAR_SPEED}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default LoadingProgressBar;
