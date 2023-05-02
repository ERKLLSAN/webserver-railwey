require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Erick Leiva',
    titulo: 'Curso NODE',
  });
});

app.get('/generic',  (req, res) => {
    res.render('generic', {
        nombre: 'Erick Leiva',
        titulo: 'Curso NODE',
      });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Erick Leiva',
        titulo: 'Curso NODE',
      });
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
