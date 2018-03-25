import React, { Component } from "react";
import Gallery from "../../components/gallery/Gallery";
import { getRectangles, removeRectangle } from "../../services/Service";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import KeenClient from "../../services/KeenClient";

const STATE = {
	LOADING: "loading",
	GALLERY: "gallery",
	ERROR: "error"
};
class Main extends Component {

	state = {
		rectangles: [],
		state: STATE.LOADING
	}

	recordKeenRectangleRemove() {
		KeenClient.recordEvent("click", {
			action: {
				intent: "remove-rectangle"
			}
		});
	}

	getContentView() {
		switch (this.state.state) {
			case STATE.LOADING:
				return <Loader />;
			case STATE.GALLERY:
				return <Gallery rectangles={this.state.rectangles} onRectangleClick={this.removeRectangle} />;
			case STATE.ERROR:
				return <ErrorMessage />;
			default:
				return <Loader />;
		}
	}

	componentDidMount() {
		this.setState({ state: STATE.LOADING });
		this.getRectangles();
	}

	removeRectangle = async (id) => {
		this.setState({ state: STATE.LOADING });
		try {
			await removeRectangle(id);
			this.recordKeenRectangleRemove();
			await this.getRectangles();
		} catch (error) {
			this.setState({ state: STATE.ERROR });
		}
	}

	async getRectangles() {
		try {
			const rectangles = await getRectangles();
			this.setState({
				rectangles,
				state: STATE.GALLERY
			});
		} catch (error) {
			this.setState({ state: STATE.ERROR });
		}
	}

	render() {
		return (
			<div>
				<Header link={{path: "/rectangle/new", icon: "add"}} title="Gallery" />
				{this.getContentView()}
			</div>
			
		);
	}
}

export default Main;