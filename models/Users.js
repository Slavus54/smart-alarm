const {Schema, model} = require('mongoose')

const Users = new Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    sex: String,
    location: {
        lat: Number,
        long: Number
    },
    collectionId: String,
    collection_boxes: [{
        id: String,
        title: String,
        category: String
    }]
})

module.exports = model('Users', Users)