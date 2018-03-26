import React from "react";
import { shallow } from "enzyme";
import ColorPicker from "./ColorPicker";

it("Should render ColorPicker with label properly", () => {
	const callback = jest.fn();
	const label = "Label";
	const colorPicker = shallow(<ColorPicker label={label} onColorChanged={callback} />);

	expect(colorPicker.find("label").contains(label)).toEqual(true);
});