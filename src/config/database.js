const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://localhost/ecommApi');
}

module.exports = connect;