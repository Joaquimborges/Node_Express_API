const sequelize = require('sequelize');
const config = require('./config');

const sequelizeConfig = new sequelize(
    config.database, 
    config.user, 
    config.password,
    {dialect: config.dialect, 
    host: config.host});


module.exports = sequelizeConfig;
