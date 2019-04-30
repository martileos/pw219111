const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql'); //sequel
const myConnection = require('express-myconnection');
const app = express();
//Importar rutas
const indiceRutas=require('./rutas/index');

//Configuraciones
app.set('port', process.env.PORT || 3000);
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
app.use(express.urlencoded({extended: false}))

//Usamos las rutas
app.use('/',indiceRutas); 

//Activar el servidor de escucha
app.listen(app.get('port'), () => {
	console.log("Escuchando en puerto 3000");
})










