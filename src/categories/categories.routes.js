'use strict'

import { Router } from "express"
import { isAdmin, validateJwt } from "../../middlewares/validate-jwt.js"
import { register,test,get,update,deleteC, search } from "./categories.controller.js"

const api = Router()

api.get('/test', test)
api.post('/register',[validateJwt, isAdmin], register)
api.get('/get', get)
api.put('/update/:id',[validateJwt, isAdmin], update)
api.delete('/delete/:id',[validateJwt, isAdmin], deleteC)
api.post('/search',[validateJwt, isAdmin], search)

export default api