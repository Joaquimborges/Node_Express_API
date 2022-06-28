const mongoose = require('mongoose');

const connect = (url) => {
    return mongoose
    .connect(url)
    .then(() => console.log('Connected to the DB...'))
    .catch((err) => console.log(err))
    
}


module.exports = connect