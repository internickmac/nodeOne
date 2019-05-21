const express =  require('express');
const router = express.Router();

//rutas
router.get('/', (req, res) => {
    res.render("index.ejs");
});

router.get('/login', (req, res) => {
    res.render("login.ejs");
});

router.get('/myindex', (req, res) => {
    res.render("miejemplo.ejs");
});


router.get('*', (req, res) => {
    res.end(`<h1>Archivo no encontrado</h1>
            <h6>Intente otra ruta</h6>`);
});

module.exports = router;