'use strict'

import { Router } from "express"
import { test, register, get, update, deleteP, search } from "./products.controller.js"

const api = Router()

api.get('/test', test)
api.post('/register', register)
api.get('/get', get)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteP)
api.post('/search', search)

export default api