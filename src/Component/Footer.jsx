import logo from "../../public/logo.png";
import React from "react";

export const Footer = () => {
  return (
    <div className="footer text-base-content py-10 md:py-20 small-text p-4  max-w-screen-2xl mx-auto">
      <aside>
        <img src={logo} className="w-20 h-20" alt="" />
        <p>
          <span className="text-2xl font-bold text-black title-text">
            ArtifactArcade
          </span>
          <br />
          Preserving the Past, Inspiring the Future
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </div>
  );
};
