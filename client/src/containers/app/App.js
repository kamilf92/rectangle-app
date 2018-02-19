import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../main/Main";
import './App.css';

class App extends Component {
  render() {
    return (
			<BrowserRouter>
				<div className="container">
					<Route exact path="/" component={Main} />
				</div>
			</BrowserRouter>
		)
  }
}

export default App;
