// config/buttons.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  //   faCompass,
  //   faMapMarkerAlt,
  //   faUser,
  //   faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Home",
    path: "/",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    label: "Blog",
    path: "/blog",
    icon: <FontAwesomeIcon icon={faBook} />,
  },
  //   {
  //     label: "My Cart",
  //     path: "/mycart",
  //     icon: <FontAwesomeIcon icon={faShoppingCart} />,
  //   },
  //   {
  //     label: "Profile",
  //     path: "/profile",
  //     icon: <FontAwesomeIcon icon={faUser} />,
  //   },
];

export default navButtons;
