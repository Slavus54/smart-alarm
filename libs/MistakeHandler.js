const MistakeHandler = key => {
    let label = ''
    
    if (key === 'mongo') {
        label = 'Sorry, check your MongoDB config'
    } else if (key === 'apollo') {
        label = 'Ypur ApolloServer is not connected'
    }

    return label
}

module.exports = MistakeHandler