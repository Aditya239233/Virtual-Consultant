const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    desc:{
        type: String,
        max:500,
        required: true
    },
    img:{
        type: String
    },
    likes:{
        type: Array,
        default: []
    },
    time:{
        type: Date,
    }
});
module.exports = mongoose.model('post', postSchema);