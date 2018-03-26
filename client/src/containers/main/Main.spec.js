import React from "react";
import { shallow } from "enzyme";
import Main from "./Main";
import Header from "../../components/header/Header";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import Loader from "../../components/loader/Loader";
import Gallery from "../../components/gallery/Gallery";

describe("Main", () => {
	it("should render header", () => {
		const main = shallow(<Main />);
		expect(main.find(Header).length).toBe(1);
	});

	it("should render error if state is equal error", () => {
		const main = shallow(<Main />);
		main.setState({ state: "error" });
		expect(main.find(ErrorMessage).length).toBe(1);
	});

	it("should render loader if state is equal loading", () => {
		const main = shallow(<Main />);
		main.setState({ state: "loading" });
		expect(main.find(Loader).length).toBe(1);
	});

	it("should render gallery if state is equal to gallery", () => {
		const main = shallow(<Main />);
		main.setState({ state: "gallery" });
		expect(main.find(Gallery).length).toBe(1);
	});
});