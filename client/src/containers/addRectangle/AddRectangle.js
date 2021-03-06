import React, { Component } from "react";
import "./AddRectangle.css";
import { addRectangle } from "../../services/Service";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import Header from "../../components/header/Header";
import Preview from "../../components/preview/Preview";
import Swipper from "../../components/swipper/Swipper";
import ColorPicker from "../../components/colorPicker/ColorPicker";
import KeenClient from "../../utils/KeenClient";

const TYPES = {
	WIDTH: "width",
	HEIGHT: "height",
	RADIUS: "radius"
};

const STATE = {
	FORM: "form",
	ERROR: "error"
};

class AddRectangle extends Component {

	state = {
		width: 50,
		height: 50,
		radius: 25,
		color: "#26a69a",
		state: STATE.FORM
	}

	recordKeenRectangleAdd() {
		KeenClient.recordEvent("click", {
			action: {
				intent: "add-rectangle"
			}
		});
	}

	onSwipperChanged = (value, type) => {
		this.setState({ [type]: value });
	}

	onColorChanged = ({ color }) => {
		this.setState({ color });
	}

	onSaveClicked = async () => {
		try {
			await addRectangle(this.state);
			this.recordKeenRectangleAdd();
			this.props.history.push("/gallery");
		} catch (error) {
			this.setState({ state: STATE.ERROR });
		}
	}

	getContentView() {
		switch (this.state.state) {
			case STATE.ERROR:
				return <ErrorMessage />;
			default:
				return this.getFormView();
		}
	}

	getFormView() {
		return (
			<div>
				<div className="add-rectangle__content">
					<div className="col l7 m7 s12 add-rectangle__filters">
						<Swipper label="Rectangle width" type={TYPES.WIDTH} onSwipperChanged={this.onSwipperChanged} value={this.state.width} />
						<Swipper label="Rectangle height" type={TYPES.HEIGHT} onSwipperChanged={this.onSwipperChanged} value={this.state.height} />
						<Swipper label="Rectangle radius" type={TYPES.RADIUS} onSwipperChanged={this.onSwipperChanged} value={this.state.radius} min={0} max={50} />
						
					</div>
					<div className="col l5 m5 s12 add-rectangle__color-picker">
						<ColorPicker label="Rectangle color" color={this.state.color} onColorChanged={this.onColorChanged} />
					</div>
				</div>
				<div className="col s12 add-rectangle__preview">
					<Preview {...this.state} />
				</div>
				<div className="col s12">
					<button className="waves-effect waves-light btn left add-rectangle__button" onClick={this.onSaveClicked}>Save</button>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="row add-rectangle">
				<Header link={{path: "/gallery", icon: "arrow_back"}} title="Add rectangle" />
				{this.getContentView()}
			</div>
		);
	}
}

export default AddRectangle;