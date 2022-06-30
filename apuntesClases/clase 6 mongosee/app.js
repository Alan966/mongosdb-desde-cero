var express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
var Producto = require('./models/producto')
var coneccion = mongoose.connect(
    'mongodb://localhost:27017/bdmongoose', {
    maxPoolSize: 50, 
    wtimeoutMS: 2500,
    useNewUrlParser: true
})
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
var app = express() 
var port = 3001

// create application/json parser 
var jsonParser = bodyParser.json()

app.use(jsonParser);

app.get('/', (req, res) => {
    Producto.find({})
    .then(productos => {
        res.send(productos)
    })
})

app.get('/producto/:id', (req, res) => {
    Producto.findById(req.params.id)
    .then(producto => {
        res.send(producto)
    })
    .catch(err => {
        res.send(err)
    })
})



app.post('/producto', (req, res) => {
    var producto = new Producto(req.body)
    producto.save()
    res.send('Producto creado')
})

try{
    const verificar =  async ()  => {
        await coneccion
       app.listen(port, () => {
           console.log(`Servidor Corriendo ${port}`)
       }); 
    }     
          verificar()
        //   const objetoProducto = new Producto(); 
        //   objetoProducto.nombre = 'Producto 1';
        //     objetoProducto.save((err) => {
        //         if (err) {
        //             console.log(err)
        //         }
        //     });
}
catch(err){ console.log(err) }
