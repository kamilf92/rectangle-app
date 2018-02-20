import React, { Component } from "react";
import Gallery from "../../components/gallery/Gallery";
import { getRectangles, removeRectangle } from "../../services/Service";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";

const STATE = {
    LOADING: "loading",
    GALLERY: "gallery"
};
class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rectangles: [],
            state: STATE.LOADING
        };

        this.removeRectangle = this.removeRectangle.bind(this);
    }

    getContentView() {
        switch(this.state.state) {
            case STATE.LOADING:
                return <Loader />
            case STATE.GALLERY:
                return <Gallery rectangles={this.state.rectangles} onRectangleClick={this.removeRectangle} />    
            default:
                return <Loader />
        }
      }

    componentDidMount() {
        this.setState({ state: STATE.LOADING });
        this.getRectangles();
    }

    async removeRectangle(id) {
        this.setState({ state: STATE.LOADING });
        await removeRectangle(id);
        await this.getRectangles();
    }

    async getRectangles() {
        const rectangles = await getRectangles();
        this.setState({ rectangles, state: STATE.GALLERY });
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
