import React from "react";
import { Navbar } from "../Component/Navbar";
import { Footer } from "../Component/Footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="bg-[#FFFFFF] max-w-screen-2xl mx-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-[590px]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
