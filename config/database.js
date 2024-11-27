const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('tienda_perifericos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
    });

    module.exports = sequelize;
