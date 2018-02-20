import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../main/Main";
import AddRectangle from "../addRectangle/AddRectangle";

class App extends Component {
  render() {
    return (
			<BrowserRouter>
				<div className="container">
					<Route exact path="/" component={Main} />
					<Route path="/rectangle/new" component={AddRectangle} />
				</div>
			</BrowserRouter>
		)
  }
}

export default App;
