const sequelize = require('../config/database');


const Categoria = require('./Categoria');
const Periferico = require('./Periferico');
const Usuario = require('./Usuario');

Categoria.hasMany(Periferico, { foreignKey: 'categoria_id' });
Periferico.belongsTo(Categoria, { foreignKey: 'categoria_id' });


Periferico.hasMany(Usuario, { foreignKey: 'id_usuario' });
Usuario.belongsTo(Periferico, { foreignKey: 'id_usuario' });


module.exports ={
    sequelize,
    Categoria,
    Periferico,
    Usuario
}