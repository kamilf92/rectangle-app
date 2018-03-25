import React, { Component } from "react";
import { getPageViewsData, getActionsData } from "../../services/QueryServices";
import Header from "../../components/header/Header";
import { Chart, CHART_TYPES } from "../../components/chart/Chart";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import "./Dashboard.css";

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

	renderCharts() {
		return (
			<section className="row dashboard__charts">
				<div className="col l6 m6 s12">
					<section className="card white">
						<Chart data={this.state.pageViewsData} title="Pageviews by url" type={CHART_TYPES.PIE} />
					</section>
				</div>
				<div className="col l6 m6 s12">
					<section className="card white">
						<Chart data={this.state.actionsData} title="Actions on page" type={CHART_TYPES.BAR} />
					</section>
				</div>
			</section>
		);
	}

	getContentView() {
		switch (this.state.state) {
			case STATE.LOADING:
				return <Loader />;
			case STATE.ERROR:
				return <ErrorMessage />;
			case STATE.CHART:
				return this.renderCharts();
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
