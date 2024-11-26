const sequelize = require('../config/database');


const Categoria = require('./Categoria');
const Periferico = require('./Periferico');


module.exports = {
    sequelize,
    Categoria,
    Periferico
}