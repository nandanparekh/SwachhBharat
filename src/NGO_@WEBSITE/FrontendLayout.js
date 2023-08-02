import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Menubar from "./Menubar";
export default function FrontendLayout() {
  return (
    <div>
      <Menubar />
      <Outlet />
      <Footer />
    </div>
  );
}
