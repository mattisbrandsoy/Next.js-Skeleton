// components/Footer.js

import "./Footer.scss";
import NavButton from "./NavButton";

export default (props) => (
  <div className="Footer">
    {props.navButtons.map((button) => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </div>
);
