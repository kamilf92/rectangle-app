import React from "react";
import { shallow } from "enzyme";
import { Chart, CHART_TYPES } from "./Chart";

it("Should render chart without errors", () => {
	const data = {result: []};
	shallow(<Chart data={data} type={CHART_TYPES.PIE} />);
});