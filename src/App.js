import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Portfolio</h1>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}