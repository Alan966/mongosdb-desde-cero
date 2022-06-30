var express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Producto = require('./models/producto')
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
var app = express();
var port = 3001

//create application/json parser 
var jsonParser = bodyParser.json()

app.use(jsonParser);

app.get('/', (req, res) => {
    console.log('Conectado a la base de datos')
    res.send('Servidor corriendo...')
})

app.get( `/producto/:id`, async (req, res) => {
    const { id } = req.params;
   res.json({
    datos : await Producto.findById({_id: id})
   })
})

app.delete('/producto/:id', async (req, res) => {
    const { id } = req.params; 
    res.json({
        datos: await Producto.findById({_id: id})
    })
})

app.post('/producto', (req, res) => {
    const {title, body} = req.body
    let objetoProducto = new Producto();

    objetoProducto.title = title;
    objetoProducto.body = body;
    
    objetoProducto.save((err) => {
        if(err) throw new Error( err.message || 'Paso algo...')
            console.log('Se registro correctamente')
            res.send('Se registro correctamente')
    })
})


try{
    const verificarConexion = async () => {
        await coneccion
        app.listen(port, () =>{
            console.log(`Servidor corriendo: ${port}`)
        })
    }
    verificarConexion();
    // const objetoProducto = new Producto()
    // objetoProducto.title = 'Primer titulo'; 
    // objetoProducto.body = 'Primer cuerpo';
    // objetoProducto.save((err) => {
    //     if(err) throw new Error( err.message || 'Paso algo...')
    //         console.log('Se registro correctamente')
    // })
}catch (error){
    console.log(error);
}

