const mongoose = require("mongoose");
const { Schema } = mongoose;

const rectangleSchema = new Schema({
    color: String,
    radius: { type: Number, min: 0, max: 50 },
    width: { type: Number, min: 1, max: 100 },
    height: { type: Number, min: 1, max: 100 }
});

mongoose.model("rectangle", rectangleSchema);