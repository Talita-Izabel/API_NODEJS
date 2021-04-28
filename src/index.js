const express = require('express');
//const bodyParser = require('body-parser');

const app = express();
app.locals.layouts = false;
//Para que ele entenda quando enviar um requisição em json para API com informações em json.
app.use(express.json());
//Para entender quando passar parâmetros via URL.
app.use(express.urlencoded({extended: false})); 

//Referenciando os controllers e repassar o app.
require('./app/controllers/index')(app);

app.listen(3000);