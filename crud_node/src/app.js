const path = require('path');
const express = require('express');
const morgan = require('morgan')
const mysql = require('mysql'); //sequel
const myConnection = require('express-myconnection');
const app = express();

//Importar rutas
const indiceRutas=require('./rutas/index');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs'); //Node ya sabe donde está el módulo
app.set('views', path.join(__dirname, 'vistas'));

//Middleware (antes de las peticiones de los usuarios (antes de las rutas))
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//Middleware 
app.use(morgan('dev')); //dev = desarrollo
app.use(myConnection(mysql,{
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








>>>>>>> 5c9263d9cd8f42d14be0d1eb82077ce5156ed7f5


