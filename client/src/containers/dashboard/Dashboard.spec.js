import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./Dashboard";
import Header from "../../components/header/Header";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import Loader from "../../components/loader/Loader";
import { Chart } from "../../components/chart/Chart";

describe("Dashboard", () => {
	it("should render header", () => {
		const dashboard = shallow(<Dashboard />);
		expect(dashboard.find(Header).length).toBe(1);
	});

	it("should render error if state is equal error", () => {
		const dashboard = shallow(<Dashboard />);
		dashboard.setState({ state: "error" });
		expect(dashboard.find(ErrorMessage).length).toBe(1);
	});

	it("should render loader if state is equal loading", () => {
		const dashboard = shallow(<Dashboard />);
		dashboard.setState({ state: "loading" });
		expect(dashboard.find(Loader).length).toBe(1);
	});

	it("should render two charts if state is equal to chart", () => {
		const dashboard = shallow(<Dashboard />);
		dashboard.setState({ state: "chart" });
		expect(dashboard.find(Chart).length).toBe(2);
	});
});