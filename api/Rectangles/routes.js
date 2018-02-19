const mongoose = require("mongoose");
const Controller = require("./controller");
const Rectangle = mongoose.model("rectangle");

module.exports = app => {

	/**
	 * Add Rectangle 
	 * @param object - Rectangle object with properties (color, radius, width, height)
	*/
	app.post("/api/add_rectangle", Controller.addRectangle);

	/**
	 * Get Rectangles
	*/
	app.get("/api/rectangles", Controller.getRectangles);

	/**
	 * Remove Rectangle
	 * @param id - Rectangle id
	*/
	app.post("/api/remove_rectangle", Controller.removeRectangle);
};