import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import { config } from 'dotenv'
import categoriesRoutes from '../src/categories/categories.routes.js'
import productsRoutes from '../src/products/products.routes.js'
import userRoutes from '../src/user/user.routes.js'
import compraRoutes  from '../src/compras/compras.routes.js'

//Configuarcion
const app = express()
config();
const port = process.env.PORT || 3056

//Configurcion del server
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

//Rutas
app.use(categoriesRoutes)
app.use('/products',productsRoutes)
app.use('/user', userRoutes)
app.use('/compra', compraRoutes)

//servidor encendido
export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}