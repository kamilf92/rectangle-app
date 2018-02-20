import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, link }) => {
  return (
    <header className="header card white">
        <p className="header__title">{title}</p>
        <Link to={link.path} className="header__link btn-floating btn-medium waves-light">
            <i className="material-icons">{link.icon}</i>
        </Link>
    </header>
  );
};

export default Header;