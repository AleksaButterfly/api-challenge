import { Fragment, useEffect } from "react";
import { node } from "prop-types";
import { useLocation } from "react-router";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <Fragment>{children}</Fragment>;
};

ScrollToTop.defaultProps = {
  children: null
};

ScrollToTop.propTypes = {
  children: node.isRequired
};

export default ScrollToTop;
