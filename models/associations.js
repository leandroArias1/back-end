const Categoria = require('./Categoria');
const Periferico = require('./Periferico');
const Usuario = require('./Usuario');

//defenir las asociaciones
Categoria.hasMany(Periferico, { foreignKey: 'categoria_id' });
Periferico.belongsTo(Categoria, { foreignKey: 'categoria_id' });


Periferico.hasMany(Usuario, { foreignKey: 'id_usuario' });
Usuario.belongsTo(Periferico, { foreignKey: 'id_usuario' });

module.exports = { Categoria, Periferico, Usuario };