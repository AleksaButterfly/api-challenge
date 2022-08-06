import React from "react";
import routes from "./routes";
import { ScrollToTop } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.css";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {routes().map((route) => {
          return (
            <Route
              key={route.name}
              path={route.path}
              element={route.component}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
