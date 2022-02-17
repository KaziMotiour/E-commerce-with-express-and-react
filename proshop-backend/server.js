import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
const app = express()

dotenv.config()

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.get('/', (req, res)=>{
    res.send('API is running....')
})
app.get('/api/porducts', (req, res)=>{
    res.json(products)
})

app.get('/api/porducts/:id', (req, res)=>{
    const product = products.find((p)=>p._id=== req.params.id)
    res.json(product)
})

const port = process.env.port || 5000
app.listen(port, console.log(`server running in ${process.env.NODE_ENV} mode on port 5000`))

