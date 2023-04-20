const {Schema, model} = require('mongoose')

const Sleeps = new Schema({
    shortid: String,
    creator: String,
    title: String,
    level: String,
    region: String,
    cords: {
        lat: Number,
        long: Number
    },
    impressions: [{
        id: String,
        impression: String,
        category: String,
        dot: {
            lat: Number,
            long: Number
        },
        link: String
    }], 
    dateUp: String,
    time_start: String,
    total: Number,
    rating: [{
        name: String,
        rates: [{
            criterion: String,
            rate: Number
        }],
        review: String
    }],
    questions: [{
        id: String,
        question: String,
        impression: String,
        level: String,
        choices: [String],
        answer: String
    }]
})

module.exports = model('Sleeps', Sleeps)