import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/app/App";
import registerServiceWorker from "./registerServiceWorker";
import KeenClient from "./utils/KeenClient";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

KeenClient.initAutoTracking({
	recordClicks: true,
	recordPageViews: true
});