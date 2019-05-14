const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 12},
    price: {type: Number, required: true},
});

//Export the model
module.exports = mongoose.model('Product', ProductSchema);
