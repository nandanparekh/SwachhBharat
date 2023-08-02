import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

import Sidebar from "./Sidebar";
export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebar />

        <Outlet />
      </div>
      <div className="App">
        {/* <Footer/>    */}</div>
    </div>
  );
}
