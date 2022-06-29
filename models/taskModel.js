const sequelize = require('sequelize');
const db = require('../db/mysql');

const task = db.define('task', 
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: sequelize.STRING,
            allowNull: false
        },
        completed: {
            type: sequelize.BOOLEAN
        }
    }
);

module.exports = task;