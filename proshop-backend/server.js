import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

import router from './routes/productRouts.js'
const app = express()

dotenv.config()
connectDB()

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods',  'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use('/api/porducts', router) 

app.use(notFound,errorHandler )


app.get('/', (req, res)=>{
    res.send('API is running....')
})



const port = process.env.port || 5000
app.listen(port, console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold))

