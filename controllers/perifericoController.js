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

    create: async (req, res) => {
        try{
            const categorias = await Categoria.findAll();
            res.render('perifericos/create', { categorias });
        }
        catch{
            res.status(500).send({message: 'Error al cargar el formulario de creación'});
            }

    

        },

        store: async (req, res) => {
            const {nombre, descripcion, precio, categoria_id } = req.body;
            const imagen = req.file ? req.file.filename : null;
            try{
                await Periferico.create({nombre, descripcion, precio, imagen, categoria_id });
                res.redirect('/perifericos');
            }
            catch{
                res.status(500).send({message: 'Error al guardar el periferico'});
                }
            },


        edit: async (req, res) => {
            const {id} = req.params;
            try{
                const periferico = await Periferico.findByPk(id);
                const categorias = await Categoria.findAll();
                res.render('perifericos/edit', { periferico, categorias });
            }
            catch{
                res.status(500).send({message: 'Error al cargar el formulario de edición'});
            }
        },

        update: async (req, res) => {
            const {id} = req.params;
            const {nombre, descripcion, precio, categoria_id } = req.body;
            const imagen = req.file ? req.file.filename : null;
            try{
                const periferico = await Periferico.findByPk(id);
                periferico.nombre = nombre;
                periferico.descripcion = descripcion;
                periferico.precio = precio;
                periferico.imagen = imagen;
                periferico.categoria_id = categoria_id;
                await periferico.save();
                res.redirect('/perifericos');
            }
            catch{
                res.status(500).send({message: 'Error al actualizar el periferico'});
                }
 
        },

        destroy: async (req, res) => {
            const {id} = req.params;
            try{
                await Periferico.destroy({where: {id}});
                res.redirect('/perifericos');
                }
                catch{
                    res.status(500).send({message: 'Error al eliminar el periferico'});
                }
        }
    

}

module.exports = perifericoController;