const express = require ('express');
const multer = require ('multer');
const perifericoController = require('../controllers/perifericoController');
const router = express.Router();


// MULTER
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filenamer: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({storage});

router.get("/", (req, res) => { res.render('home', {
    title: "Gamer's Edge",
    pathToCss: "../public/css"
})}); //home

router.get('/perifericos', perifericoController.list); //rutas crud

router.get('/perifericos/create', perifericoController.create);
router.post('/perifericos/create', upload.single('imagen'), perifericoController.store);

router.get('/perifericos/:id/edit', perifericoController.edit);
router.put('/perifericos/:id', upload.single('imagen'), perifericoController.update);

router.delete('/perifericos/:id', perifericoController.destroy);




module.exports = router;