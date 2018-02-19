import React, { Component } from "react";
import Preview from "../../components/preview/Preview";
import { Service } from "../../services/Service";


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rectangles: []
        };
    }
    async componentDidMount() {
        //await Service.addRectangle({color: "#9e9e9e9e", width: 100, height: 100, radius: 10});
        const rectangles = await Service.getRectangles();
        console.log(rectangles)
        this.setState({ rectangles })
    }

    render() {
        return ( 
            <Preview color="#9e9e9e9e" width={100} height={100} radius={5} />
        )
    }
}

export default Main;
