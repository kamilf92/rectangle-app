import React, { Component } from "react";
import Gallery from "../../components/gallery/Gallery";
import { getRectangles } from "../../services/Service";
import Header from "../../components/header/Header";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rectangles: []
        };
    }

    async componentDidMount() {
        //await addRectangle({color: "#009688", width: 50, height: 75, radius: 5});
        const rectangles = await getRectangles();
        this.setState({ rectangles })
    }

    render() {
        return ( 
            <div>
                <Header link={{path: "/rectangle/new", icon: "add"}} title="Gallery" />
                <Gallery rectangles={this.state.rectangles} />
            </div>
            
        );
    }
}

export default Main;
