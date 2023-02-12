const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author:{
        type: String,
        reqired: false,
    }
})

module.exports = mongoose.model('Song', songSchema)