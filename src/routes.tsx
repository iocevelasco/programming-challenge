import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import { lazy } from "react";

const LadingPage = lazy(() => import("ui/pages/Home"));

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<LadingPage />} />
    </ReactDomRoutes>
  );
};

export default Routes;
