import React, { Component } from "react";
import Header from "../../components/header/Header";
import config from "../../config";
import "keen-explorer/dist/keen-explorer";

class Explorer extends Component {
	renderExplorer(el) {
		if (el) {
			return new window.Keen.Explorer.App(el)
				.client({
					projectId: config.keenProjectId,
					readKey: config.keenReadKey,
					masterKey: config.keenMasterKey
				})
				.persistence(true)
				.fetch();
		}
	}

	render() {
		return (
			<div className="row explorer">
				<Header link={{path: "/", icon: "arrow_back"}} title="Explorer" />
				<div ref={(el) => this.renderExplorer(el)} className="col s12" />
			</div>
		);
	}
}

export default Explorer;
