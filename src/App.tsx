import { BrowserRouter, Link } from "react-router-dom";

export default function App({ name }) {
  return (
    <BrowserRouter>
      <header>
        <h1>{name}</h1>
        <nav>
          <ul>
            <li>
              <Link to="/react-single">single</Link>
            </li>
            <li>
              <Link to="/react-multiple">multiple</Link>
            </li>
            <li>
              <Link to="/react-app1">app1</Link>
            </li>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  );
}
