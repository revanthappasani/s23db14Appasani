const mongoose = require("mongoose")
const DeerSchema = mongoose.Schema({
Deer_color: {type:String},
Deer_breed: {type:String, required:true,minLength:3,maxLength:50},
Deer_price: {type: Number, required: true, min: 5, max: 20000}
})
module.exports = mongoose.model("Deer",DeerSchema)