import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Post } from "./components/Post";
import { Posts } from "./components/Posts";

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
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/posts"
          >
            Posts
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact message="hoge" />} />
        <Route path="/posts" element={<Posts />}>
          <Route path="post" element={<Post />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
