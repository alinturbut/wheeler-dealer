'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CarSchema = new mongoose.Schema({
    name: String,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    filePath: String
});

export default mongoose.model('Car', CarSchema);