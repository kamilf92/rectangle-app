import React from "react";
import { shallow } from "enzyme";
import ErrorMessage from "./ErrorMessage";

it("Should render ErrorMessage without crashing", () => {
	shallow(<ErrorMessage />);
});
