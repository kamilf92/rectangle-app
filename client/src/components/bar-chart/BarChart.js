import React from "react";
import Keen from "keen-js";

const BarChart = ({ data, title }) => {
	function showChart(el) {
		if (el) {
			const chart = new Keen.Dataviz()
				.el(el)
				.title(title)
				.type("columnchart")
				.prepare();

			chart.data(data).render();
		}
	}
		
	return (
		<div ref={(el) => showChart(el)} />
	);
};

export default BarChart;