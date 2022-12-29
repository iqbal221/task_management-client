import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="lg:px-32 md:px-14 px-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
