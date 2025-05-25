import express from 'express'
import 'dotenv/config'

import { healtRouter } from './routes/healt.routes.js'
import { productRouter } from './routes/product.routes.js'


const app = express()


const port = process.env.PORT_Dev ?? 3001

app.use(express.json());

app.use('/ping', healtRouter)
app.use('/products', productRouter)



app.listen(port , () => {
    console.log(`Server corriendo en puerto ${port}`)
})