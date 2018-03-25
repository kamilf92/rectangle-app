import React, { Component } from "react";
import Header from "../../components/header/Header";
import "keen-explorer/dist/keen-explorer";

class Explorer extends Component {
	renderExplorer(el) {
		if (el) {
			return new window.Keen.Explorer.App(el)
				.client({
					projectId: "5ab4af0ac9e77c0001b45de9",
					readKey: "FC18BB86EB8C6A86B75108C4071E5A1E06E33B0713482D1DC428BC2E22A58F3AF005A4B2FC986C2A858228048E4D7DE837F9921C23D6D22ACF4B511416F371527F7F82DCF488C582D513DC541873A999A3FDF91B4813D355F94033982A13C527",
					masterKey: "D1770BD52A99D7BC1D162A32BEFB03A86B35A5FE0377845D7A19D077E49202EE"
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
