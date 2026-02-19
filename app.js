const express = require('express');
const path = require('path');
const app = express();
const ejsMate = require('ejs-mate')
const servicios = require('./data/servicios');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', { servicios })
})


app.get('/servicios/:slug', (req, res) => {
    const { slug } = req.params;

    const servicio = servicios.find(s => s.slug === slug);

    if (!servicio) {
        return res.status(400).send("Servicio no encontrado");
    }
    res.render('servicio', { servicio })
})






















app.listen(3000, () => {
    console.log("Escuchando al servidor 3000")
});