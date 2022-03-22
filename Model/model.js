const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        // unique: true
    },
    location:{
        type: String,
        required: true,
        // unique: true
    },
    image:{
        type: String,
        required: true
    },
    established:{
        type: Date,
        default: new Date
    },
    cloud_id:{
        type: String
    },
    cloud_url:{
        type: String
    }
})

module.exports = mongoose.model("schoolAPI", Schema)