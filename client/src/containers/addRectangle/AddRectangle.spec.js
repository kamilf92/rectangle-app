import React from "react";
import { shallow } from "enzyme";
import AddRectangle from "./AddRectangle";

describe("AddRectangle", () => {
	it("renders without crashing", () => {
		shallow(<AddRectangle />);
	});
});