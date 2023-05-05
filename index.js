
const bodyParser = require ('body-parser');
const path = require ('path')

const express = require ('express');
const app = express();
const cors = require('cors')



app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));
app.use(express.json()); //ojo la posicion tiene que estar antes del app.use('/api', require('./router'))
app.use(cors()); //ojo la posicion tiene que estar antes del app.use('/api', require('./router'))


app.get('*', function(req, res, next){res.sendFile(path.resolve('client/index.html'));
}) 


app.listen(3000)
console.log("servidor en puerto", 3000)


