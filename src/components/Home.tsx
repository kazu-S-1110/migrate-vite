import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div>Home</div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "nonActive")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "nonActive")}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};
