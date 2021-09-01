const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const routes = require('./routes/api');

const app = express();


let port = 5000;
let dbname = "hsgdb"
let userdb = "root";
let passwdDB = "SG515t3m45";

mongoose.connect(`mongodb+srv://${userdb}:${passwdDB}@mongohsg.cu1xj.mongodb.net/${dbname}?retryWrites=true&w=majority`);
mongoose.connection.on('connected', function(){
    console.log('Connected to Database '+dbname);
});
mongoose.connection.on('error', (err)=>{
    console.log('Database error: '+ err);
});


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname+'/views'));


app.use('/api', routes); // todo o url começado por '/api' chama as rotas em './routes/api'

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(422).send({error: err.message});
});

app.get('/', function(req,res){
    res.render('pages/PItemplate');
});

// 'process.env.port': caso usemos Heroku
app.listen(process.env.port || port, () =>{
    console.log('Servidor em execução na porta: '+ port);
  });