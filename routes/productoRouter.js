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

router.get("/", (req, res) => { res.render('home')});

router.get('/perifericos', perifericoController.list);


module.exports = router;