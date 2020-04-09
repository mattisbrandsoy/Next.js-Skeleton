// components/NavButton.js

import Link from "next/link";
import "./NavButton.scss";

export default (props) => (
  <Link href={props.path}>
    <div className="NavButton">
      <div className="Icon">{props.icon}</div>
      <span className="Label">{props.label}</span>
    </div>
  </Link>
);
