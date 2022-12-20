import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/imagedetail">Image Detail</Link>
      </div>
    </header>
  );
};
export default Header;
