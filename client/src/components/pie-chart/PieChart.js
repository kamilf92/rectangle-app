import React from "react";
import Keen from "keen-js";

const PieChart = ({ data, title }) => {
	function showChart(el) {
		if (el) {
			const chart = new Keen.Dataviz()
				.el(el)
				.title(title)
				.type("piechart")
				.prepare();

			chart.data(data).render();
		}
	}
		
	return (
		<div ref={(el) => showChart(el)} />
	);
};

export default PieChart;