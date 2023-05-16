const {Schema, model} = require('mongoose')

const Orders = new Schema({
    shortid: String,
    creator: String,
    title: String,
    category: String,
    color: String,
    calls: [{
        id: String,
        call: String,
        sound_level: String,
        time_start: String
    }],
    cost: Number,
    region: String,
    cords: {
        lat: Number,
        long: Number
    },
    tel: String,
    card: String,
    isAccepted: Boolean,
    dateUp: String
})

module.exports = model('Orders', Orders)