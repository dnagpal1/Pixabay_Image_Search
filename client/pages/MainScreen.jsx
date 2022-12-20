import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainScreen = () => {
  return (
    <div id="mainpage">
      <header className="header">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/imagedetail">Image Detail</Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
export default MainScreen;
