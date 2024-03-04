'use strict'

import Compra from "./compras.model.js"
import { checkUpdate } from "../../utils/validator.js"
import Product from "./compras.model.js"

export const test = (req , res)=>{
    console.log('test is running')
    return res.send({message: 'Test is running'})
}

export const register = async(req, res)=>{
    try{
        let data = req.body
        let product = await Product.findOne({ _id: data.product })
        if (!product) return res.status(404).send({ message: 'Purchase not found' })
        let compra = new Compra(data)
        await compra.save() 
        return res.send({message: `Purchase registered correctly ${compra.description}`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error registering purchase', err: err})
    }
}

export const update = async(req, res)=>{ 
    try{
        let { id } = req.params  
        let data = req.body
        let update = checkUpdate(data, id)
        if(!update) return res.status(400).send({message: 'Have submitted some data that cannot be updated or missing data'})
        let updatedCompra = await Compra.findOneAndUpdate(
            {_id: id},
            data, 
            {new: true}
        ).populate('product')
        if(!updatedCompra) return res.status(401).send({message: 'Purchase not found and not updated'})
        return res.send({message: 'Updated purchase', updatedCompra})
    }catch(err){
        console.error(err)
        if(err.keyValue.description) return res.status(400).send({message: `Purchase ${err.keyValue.description} is alredy taken`})
        return res.status(500).send({message: 'Error updating purchase'})
    }
}

export const deleteCom = async(req, res)=>{
    try{
        let { id } = req.params
        let deletedCompra = await Compra.findOneAndDelete({_id: id}) 
        if(!deletedCompra) return res.status(404).send({message: 'Purchase not found and not deleted'})
        return res.send({message: `Purchase with name ${deletedCompra.description} deleted successfully`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting Purchase'})
    }
}

export const get = async (req, res) => {
    try {
        let compras = await Compra.find()
        return res.send({ compras })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error getting Purchase' })
    }
}
