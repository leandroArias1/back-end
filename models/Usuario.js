const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./Categoria')
const Periferico = require('./Periferico')

const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    mail: {
        type: DataTypes.STRING
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categoria',
            key: 'id'
            }
    }
},
    {
        tableName: 'usuarios',
        timestamps: false
});

    Usuario.hasMany(Periferico, { foreignKey: 'categoria_id'} );

module.exports = Usuario;