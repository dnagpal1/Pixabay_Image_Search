import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainScreen = () => {
  return (
    <div id="mainpage">
      <header className="header">
        <div id="leftDiv"></div>
        <div>
          <p id="title">Pixabay Image Search</p>
        </div>
        <div id="rightDiv">
          <Link to="/">Home</Link>
        </div>
      </header>

      <Outlet />
    </div>
  );
};
export default MainScreen;
