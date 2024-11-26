const { Periferico, Categoria } = require('../models');

const perifericoController = {
    list: async (req, res) => {
        try{
            const perifericos = await Periferico.findAll({include: Categoria});
            res.render('perifericos/list', { perifericos });

        }
        catch{
            res.status(500).send({message: 'Error al buscar perifericos'});
            }
    },


}

module.exports = perifericoController;