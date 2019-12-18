const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')

//const port=process.PORT !!  3000

app.use(express.static(__dirname + '/public'));

//Regitramos parcial
//damos el nombre del directorio donde corre y luego la dirección
hbs.registerPartials(__dirname + '/views/parciales')
    //Express HBS engine
    //hbs como generador por defecto
app.set('view engine', 'hbs');

//helper



app.get('/', function(req, res) {
    //render concepto de tomar un valor.
    res.render('home', {
        nombre: 'dOrIvAl E. PiChAmBa T.',

    });
});
//al redireccionar al about me aparecerá el mensaje 
app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});

//nodemon para correr el programa recurrentemente
//Probar un web server y las ejecuciones
//3 servir un contenido estático.
//crear cuenta en HEROKU