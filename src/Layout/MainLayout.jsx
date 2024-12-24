import React from "react";
import { Navbar } from "../Component/Navbar";
import { Footer } from "../Component/Footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="bg-[#FFFFFF] ">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
