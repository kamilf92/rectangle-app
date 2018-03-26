import KeenClient from "./KeenClient";

describe("KeenClient", () => {
	it("Should return keen client instance", () => {
		const keen1 = KeenClient;
		const keen2 = KeenClient;
		
		expect(keen1).toEqual(keen2);
	});
});