import React, { Component } from "react";
import Gallery from "../../components/gallery/Gallery";
import { getRectangles } from "../../services/Service";
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
    }

    getContentView() {
        let { events, artist } = this.state;    
        switch(this.state.state) {
          case STATE.LOADING:
            return <Loader />
          case STATE.GALLERY:
            return <Gallery rectangles={this.state.rectangles} />       
        }
      }

    async componentDidMount() {
        //await addRectangle({color: "#009688", width: 50, height: 75, radius: 5});
        this.setState({ state: STATE.LOADING});
        const rectangles = await getRectangles();
        this.setState({ rectangles, state: STATE.GALLERY })
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
