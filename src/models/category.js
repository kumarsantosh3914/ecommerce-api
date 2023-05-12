const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const categoryModel = new mongoose.model('Category', categorySchema);

module.exports = categoryModel;