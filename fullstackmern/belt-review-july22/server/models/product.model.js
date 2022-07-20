const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Product name must be at least 2 characters!"]
    },
    picture: {
        type: String,
        required: [true, "Picture is required"]
    },
    price: {
        type: Number,
        min: [0.01, "Product must have a positive price"],
        required: [true, "Product must have a price!"]
    },
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [0, "Quantity cannot be negative"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;