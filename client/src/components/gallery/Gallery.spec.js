import React from "react";
import { shallow } from "enzyme";
import Gallery from "./Gallery";

it("Should render gallery items", () => {
	const rectangles = [{_id: 1}, {_id: 2}];
	const gallery = shallow(<Gallery rectangles={rectangles} />);
	expect(gallery.find(".gallery__item").length).toEqual(rectangles.length);
});

it("Should invoke callback on gallery item click", () => {
	const callback = jest.fn();
	const rectangles = [{_id: 1}];
	const gallery = shallow(<Gallery  onRectangleClick={callback} rectangles={rectangles} />);

	gallery.find(".gallery__item").simulate("click", {target: {}});
	expect(callback).toBeCalled();
});