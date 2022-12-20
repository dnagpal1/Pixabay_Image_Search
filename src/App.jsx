import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Search from "../client/pages/Search";
import ImageDetail from "../client/pages/ImageDetail";
import ErrorPage from "./error-page";
import MainScreen from "../client/pages/MainScreen";

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainScreen />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Search />} />
        <Route path="/imagedetail" element={<ImageDetail />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
