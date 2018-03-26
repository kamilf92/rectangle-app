import React from "react";
import { shallow } from "enzyme";
import Loader from "./Loader";

it("Should render loader without crashing", () => {
	shallow(<Loader />);
});
