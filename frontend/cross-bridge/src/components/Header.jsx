import React from "react";
import logo from "../assets/logo.JPG";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="about-us"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About Us
        </NavLink>
        <NavLink
          to="courses"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Courses
        </NavLink>
        <NavLink
          to="alumni-news"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Alumni News
        </NavLink>
        <NavLink
          to="contact-us"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
}
