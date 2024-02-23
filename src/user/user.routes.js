import express from 'express'
import { isAdmin, validateJwt } from '../../middlewares/validate-jwt.js';
import { test,register,login,update,deleteU,get,search } from './user .controller.js';

const api = express.Router();

api.post('/register', register)
api.post('/login', login)
api.get('/get', get)

api.get('/test', [validateJwt, isAdmin], test)
api.put('/update/:id', [validateJwt, isAdmin], update)
api.delete('/delete/:id', [validateJwt, isAdmin], deleteU)
api.post('/search', [validateJwt, isAdmin], search)

export default api