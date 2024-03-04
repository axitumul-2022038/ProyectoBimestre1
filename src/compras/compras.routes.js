'use strict'

import {Router} from "express"
import { validateJwt } from "../../middlewares/validate-jwt.js"
import { test,register, get,update, deleteCom} from "../compras/compras.controller.js"

const api = Router()

api.get('/test', test)
api.post('/register',[validateJwt], register)
api.get('/get', get)
api.put('/update/:id',[validateJwt], update)
api.delete('/delete/:id',[validateJwt], deleteCom)

export default api 