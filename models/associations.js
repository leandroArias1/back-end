const Categoria = require('./Categoria');
const Periferico = require('./Periferico');
const Usuario = require('./Usuario');

//defenir las asociaciones
Categoria.belongsTo(Periferico, { foreignKey: 'categoria_id' });
Periferico.hasMany(Categoria, { foreignKey: 'categoria_id' });


Periferico.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Usuario.belongsToMany(Periferico, { foreignKey: 'id_usuario' });

module.exports = { Categoria, Periferico, Usuario };