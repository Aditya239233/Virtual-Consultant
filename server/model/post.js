const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    username:{
        type: String,
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
    }
});
module.exports = mongoose.model('post', postSchema);