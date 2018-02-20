import React, { Component } from "react";
import { addRectangle } from "../../services/Service";
import Header from "../../components/header/Header";
import Preview from "../../components/preview/Preview";
import Swipper from "../../components/swipper/Swipper";
import ColorPicker from "../../components/colorPicker/ColorPicker";

const TYPES = {
    WIDTH: "width",
    HEIGHT: "height",
    RADIUS: "radius"
};

class AddRectangle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 50,
            height: 50,
            radius: 25,
            color: "#26a69a"
        }

        this.onSwipperChanged = this.onSwipperChanged.bind(this);
        this.onColorChanged = this.onColorChanged.bind(this);
        this.onSaveClicked = this.onSaveClicked.bind(this);
    }

    onSwipperChanged(value, type) {
        this.setState({[type]: value});
    }

    onColorChanged(color) {
        this.setState({ color });
    }

    async onSaveClicked() {
        await addRectangle(this.state);
        this.props.history.push("/");
    }

    render() {
        return ( 
            <div className="row add-rectangle">
                <Header link={{path: "/", icon: "arrow_back"}} title="Add rectangle" />
                <div className="add-rectangle__content">
                    <div className="col l6 m6 s12 add-rectangle__filters">
                        <Swipper label="Rectangle width" type={TYPES.WIDTH} onSwipperChanged={this.onSwipperChanged} value={this.state.width} />
                        <Swipper label="Rectangle height" type={TYPES.HEIGHT} onSwipperChanged={this.onSwipperChanged} value={this.state.height} />
                        <Swipper label="Rectangle radius" type={TYPES.RADIUS} onSwipperChanged={this.onSwipperChanged} value={this.state.radius} max={50} />
                        <ColorPicker label="Rectangle color" color={this.state.color} onColorChanged={this.onColorChanged} />
                    </div>
                    <div className="col l6 m6 s12 add-rectangle__preview">
                        <Preview {...this.state} />
                    </div> 
                </div>
                <div className="col s12">
                    <button className="waves-effect waves-light btn left add-rectangle__button" onClick={this.onSaveClicked}>Save</button>
                </div>       
            </div>
        );
    }
}

export default AddRectangle;
