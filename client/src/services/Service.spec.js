import { getRectangles, addRectangle, removeRectangle } from "./Service";

global.fetch = jest.fn().mockImplementation(() => {
	return new Promise((resolve) => {
		resolve({
			ok: true,
			rectangles: [],
			json: () => {
				return {rectangles: []};
			}
		});
	});
});

describe("Service", () => {
	it("getRectangles method", async () => {
		const data = await getRectangles();
		expect(data).toBeDefined();
		expect(fetch).toBeCalledWith("/api/rectangles", expect.any(Object));
	});

	it("addRectangle method", async () => {
		await addRectangle();
		expect(fetch).toBeCalledWith("/api/add_rectangle", expect.any(Object));
	});

	it("removeRectangle method", async () => {
		await removeRectangle();
		expect(fetch).toBeCalledWith("/api/remove_rectangle", expect.any(Object));
	});
});