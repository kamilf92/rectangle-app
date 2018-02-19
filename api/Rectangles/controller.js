const mongoose = require("mongoose");
const Rectangle = mongoose.model("rectangle");

/**
 * Add Rectangle 
 * @param object - Rectangle object with properties (color, radius, width, height)
 */
exports.addRectangle = async function (req, res) {
    try {  
        await new Rectangle(req.body).save();
        res.send({ msg: "Rectangle has been added" });
    } catch (err) {
        res.status(500).send(err);
    }
}

/**
 * Remove Rectangle 
 * @param id - Rectangle id
 */
exports.removeRectangle = async function (req, res) {
    try {  
        await Rectangle.findById(req.body.id).remove();
        res.send({ msg: "Rectangle has been deleted" });
    } catch (err) {
        res.status(500).send(err);
    }
}

/**
 * Get Rectangles 
 * All rectangles
 */
exports.getRectangles = async function (req, res) {
    try {  
        const rectangles = await Rectangle.find({});
        res.send({ rectangles });
    } catch (err) {
        res.status(500).send(err);
    }
}