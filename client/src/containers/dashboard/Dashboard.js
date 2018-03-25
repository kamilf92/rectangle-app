import React, { Component } from "react";
import { getPageViewsData, getActionsData } from "../../services/QueryServices";
import Header from "../../components/header/Header";
import PieChart from "../../components/pie-chart/PieChart";
import BarChart from "../../components/bar-chart/BarChart";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const STATE = {
	LOADING: "loading",
	CHART: "chart",
	ERROR: "error"
};

class Dashboard extends Component {
	state = {
		pageViewsData: null,
		actionsData: null,
		state: STATE.LOADING
	}

	componentDidMount() {
		this.getChartsData();
	}

	async getChartsData() {
		try {
			const results = await Promise.all([getPageViewsData(), getActionsData()]);
			this.setState({
				pageViewsData: results[0],
				actionsData: results[1],
				state: STATE.CHART
			});
		} catch (error) {
			this.setState({ state: STATE.ERROR });
		}
	}

	getContentView() {
		switch (this.state.state) {
			case STATE.LOADING:
				return <Loader />;
			case STATE.ERROR:
				return <ErrorMessage />;
			case STATE.CHART:
				return (
					<section>
						<section className="card white col l6 m6 s12">
							<PieChart data={this.state.pageViewsData} title="Pageviews by url" />
						</section>
						<section className="card white col l6 m6 s12">
							<BarChart data={this.state.actionsData} title="Actions on page" />
						</section>
					</section>
				);
			default:
				return <Loader />;
		}
	}
	
	render() {
		return (
			<div className="row dashboard">
				<Header link={{path: "/", icon: "arrow_back"}} title="Dashboard" />
				{this.getContentView()}
			</div>
		);
	}
}

export default Dashboard;
