import React from "react";
import { shallow } from "enzyme";
import Swipper from "./Swipper";

it("Should render component with label", () => {
	const label = "Example label";
	const swipper = shallow(<Swipper label={label} />);
	expect(swipper.contains(label)).toEqual(true);
});

it("Should invoke callback function onChange", () => {
	const callback = jest.fn();
	const type = "TYPEA";
	const value = 100;
	const swipper = shallow(<Swipper onSwipperChanged={callback} type={type} />);

	swipper.find("input").simulate("change", {target: { value }});
	expect(callback).toBeCalledWith(value, type);
});