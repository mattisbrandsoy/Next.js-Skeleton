import Link from "next/link";

import "./Header.scss";

export default (props) => (
  <div className="Header">
    {props.appTitle}
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);
