const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    roll : {
        type: String,
        required : true
    },
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    department : {
        type : String
    },
    gender : String,
    status : String,
    post : {
        type : String
    },
    subject : {
        type : String,
    },
    detail : {
        type : String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    }
},
{timestamps: true}
)

const Complaintdb = mongoose.model('complaintdb', schema);

module.exports = Complaintdb;