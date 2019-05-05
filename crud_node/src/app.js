const express = require('express');
const path = require('path');
const morgan = require('morgan')
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection')

//Importar rutas
const indiceRutas=require('./rutas/index');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs'); //Node ya sabe donde está el módulo
app.set('views', path.join(__dirname, 'vistas'));

//Middleware (antes de las peticiones de los usuarios (antes de las rutas))
app.use(morgan('dev'));
app.use(myConnection(mysql, {
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'crudnodejsmysql'
},'single'));

//Usamos las rutas
app.use('/',indiceRutas);

//Activar el servidor de escucha
app.listen(app.get('port'), () => {
	console.log("Escuchando en puerto 3000");
});


