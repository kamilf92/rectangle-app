import React, { Component } from 'react';
import Keen from 'keen-js';
import KeenClient from '../../services/KeenClient';

class Dashboard extends Component {

	state = {
		data: null,
		error: null
	}

	componentDidMount() {
		this.runQueries();
	}

	runQueries() {
		KeenClient
			.query('count', {
				event_collection: 'pageviews',
				group_by: ['url.info.path'],
				timeframe: 'this_14_days',
				timezone: 'Europe/Paris'
			})
			.then(data => {
				//this.setState({ data });
				this.prepareChart(data);
			})
			.catch((error) => this.setState({ error }));
	}

	prepareChart(data) {
		if (this.el) {
			const chart = new Keen.Dataviz()
				.el(this.el)
				.height(240)
				.title('Pageviews by url')
				.type('piechart')
				.prepare();

			chart
				.data(data)
				.render();
		}
	}
	
	render() {
		return (
			<div ref={(div) => this.el = div} />
		);
	}
}

export default Dashboard;
