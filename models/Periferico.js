const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./Categoria');

const Periferico = sequelize.define('Periferico',{
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    descripcion:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagen:{
        type: DataTypes.STRING
    },
    categoria_id:{

        type: DataTypes.INTEGER,
        references:{
            model: 'categorias',
            key: 'id'
        }//referencia a MySQL
    }
},

    {
        tableName: 'PERIFERICOS',
        timestamps: false
    });

    Periferico.belongsTo(Categoria, { foreignKey: 'categoria_id' });


    module.exports = Periferico;