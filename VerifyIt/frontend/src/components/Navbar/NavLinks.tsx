import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul className="flex items-center gap-8 text-sm ">
      <li>
        <Link to="/features">Features</Link>
      </li>

      <li>
        <Link to="/how-it-works">How It Works</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
}