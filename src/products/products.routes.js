'use strict'
import { isAdmin,validateJwt } from "../../middlewares/validate-jwt.js"
import { Router } from "express"
import { test, register, get, update, deleteP, search } from "./products.controller.js"

const api = Router()

api.get('/test', test)
api.post('/register',[validateJwt, isAdmin], register)
api.get('/get',[validateJwt, isAdmin], get)
api.put('/update/:id',[validateJwt, isAdmin], update)
api.delete('/delete/:id',[validateJwt, isAdmin], deleteP)
api.post('/search',[validateJwt, isAdmin], search)

export default api