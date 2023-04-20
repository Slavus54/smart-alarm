const {Schema, model} = require('mongoose')

const Alarms = new Schema({
    shortid: String,
    creator: String,
    title: String,
    category: String,
    tel: String,
    color: String,
    episodes: [{
        id: String,
        volume: Number,
        stage: String,
        time_start: String
    }],
    cost: Number,
    region: String,
    cords: {
        lat: Number,
        long: Number
    },
    isAccepted: Boolean
})

module.exports = model('Alarms', Alarms)