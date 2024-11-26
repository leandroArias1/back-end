const Categoria = require('./Categoria');
const Periferico = require('./Periferico');

//Definir las Asociaciones
Categoria.hasMany(Periferico, {foreignKey: 'categoria_id'});
Perifericos.belongsTo(Categoria, {foreignKey: 'categoria_id'});

module.exports = {Categoria,  Periferico};