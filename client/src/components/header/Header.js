import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

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

Header.propTypes = {
	title: PropTypes.string,
	link: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Header;