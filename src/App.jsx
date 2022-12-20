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
import Header from "../client/pages/Header";

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />} errorElement={<ErrorPage />}>
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
