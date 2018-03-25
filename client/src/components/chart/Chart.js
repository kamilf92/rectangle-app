import React from "react";
import Keen from "keen-js";

const Chart = ({ data, title, type }) => {
	function showChart(el) {
		if (el) {
			const chart = new Keen.Dataviz()
				.el(el)
				.title(title)
				.type(type)
				.prepare();

			chart.data(data).render();
		}
	}
		
	return (
		<div ref={(el) => showChart(el)} />
	);
};

const CHART_TYPES = {
	BAR: "columnchart",
	PIE: "piechart"
};

export { Chart, CHART_TYPES };