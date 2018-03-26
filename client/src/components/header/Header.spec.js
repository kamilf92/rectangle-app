import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

it("Should render header with title and link properly", () => {
	const title = "Title";
	const link = {path: "/link", icon: "A"};
	const header = shallow(<Header link={link} title={title} />);

	expect(header.find("i").contains(link.icon)).toEqual(true);
	expect(header.find(".header__title").contains(title)).toEqual(true);
});