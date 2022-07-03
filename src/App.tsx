import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <h1>React router v6</h1>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "nonActive")}
            to="/"
          >
            Home
          </NavLink>
        </li>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact message="hoge" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
