const mongoose = require("mongoose")
const DeerSchema = mongoose.Schema({
Deer_type: String,
Deer_breed: String,
Deer_price: Number
})
module.exports = mongoose.model("Deer",DeerSchema)