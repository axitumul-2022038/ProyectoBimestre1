'use strict'

import { Router } from "express"
import { register,test,get,update,deleteC, search } from "./categories.controller.js"

const api = Router()

api.get('/test', test)
api.post('/register', register)
api.get('/get', get)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteC)
api.post('/search', search)

export default api