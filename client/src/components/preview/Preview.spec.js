import React from "react";
import { shallow } from "enzyme";
import Preview from "./Preview";

it("Should render component with specify styles", () => {
	const styles = {
		width: 100,
		height: 100,
		backgroundColor: "#FFF",
		borderRadius: "20%"
	};

	const preview = shallow(<Preview width={100} height={100} color="#FFF" radius={20} />);
	expect(preview.find(".preview__content").prop("style")).toMatchObject(styles);
});