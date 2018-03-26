import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

class Main extends Component {
	render() {
		return (
			<div className="main">
				<Link to="/gallery" className="card main__item">GALLERY</Link>
				<Link to="/dashboard" className="card main__item">DASHBOARD</Link>
				<Link to="/explorer" className="card main__item">EXPLORER</Link>
			</div>
		);
	}
}

export default Main;