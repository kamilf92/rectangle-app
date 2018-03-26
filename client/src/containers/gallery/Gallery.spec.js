import React from "react";
import { shallow } from "enzyme";
import Gallery from "./Gallery";
import Header from "../../components/header/Header";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import Loader from "../../components/loader/Loader";
import GalleryComponent from "../../components/gallery/Gallery";

describe("Gallery", () => {
	it("should render header", () => {
		const gallery = shallow(<Gallery />);
		expect(gallery.find(Header).length).toBe(1);
	});

	it("should render error if state is equal error", () => {
		const gallery = shallow(<Gallery />);
		gallery.setState({ state: "error" });
		expect(gallery.find(ErrorMessage).length).toBe(1);
	});

	it("should render loader if state is equal loading", () => {
		const gallery = shallow(<Gallery />);
		gallery.setState({ state: "loading" });
		expect(gallery.find(Loader).length).toBe(1);
	});

	it("should render gallery if state is equal to gallery", () => {
		const gallery = shallow(<Gallery />);
		gallery.setState({ state: "gallery" });
		expect(gallery.find(GalleryComponent).length).toBe(1);
	});
});