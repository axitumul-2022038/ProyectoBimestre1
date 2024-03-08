'use strict'

import Products from "./products.model.js"
import { checkUpdate } from "../../utils/validator.js"
import Categories from "../categories/categories.model.js"

export const test = (req , res)=>{
    console.log('test is running')
    return res.send({message: 'Test is running'})
}

export const register = async(req, res)=>{
    try{
        let data = req.body
        let categories = await Categories.findOne({ _id: data.category })
        if (!categories) return res.status(404).send({ message: 'Category not found' })
        let products = new Products(data)
        await products.save() 
        return res.send({message: `product registered correctly ${products.name}`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error registering product', err: err})
    }
}

export const get = async (req, res) => {
    try {
        let products = await Products.find()
        return res.send({ products })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error getting product' })
    }
}

export const update = async(req, res)=>{ 
    try{
        let { id } = req.params  
        let data = req.body
        let update = checkUpdate(data, id)
        if(!update) return res.status(400).send({message: 'Have submitted some data that cannot be updated or missing data'})
        let updatedProducts = await Products.findOneAndUpdate(
            {_id: id},
            data, 
            {new: true}
        ).populate('category')
        if(!updatedProducts) return res.status(401).send({message: 'Product not found and not updated'})
        return res.send({message: 'Updated product', updatedProducts})
    }catch(err){
        console.error(err)
        if(err.keyValue.name) return res.status(400).send({message: `Product ${err.keyValue.name} is alredy taken`})
        return res.status(500).send({message: 'Error updating product'})
    }
}

export const deleteP = async(req, res)=>{
    try{
        let { id } = req.params
        let deletedProducts = await Products.findOneAndDelete({_id: id}) 
        if(!deletedProducts) return res.status(404).send({message: 'Product not found and not deleted'})
        return res.send({message: `Product with name ${deletedProducts.name} deleted successfully`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting Product'})
    }
}

export const search = async(req, res)=>{
    try{
        let { search } = req.body
        let products = await Products.find(
            {brand: search}
        ).populate('category')
        if(!products) return res.status(404).send({message: 'Product not found'})
        return res.send({message: 'Product found', products})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error searching product'})
    }
}

export const list = async (req, res) => {
    try {
        let data = await Products.find().populate('category')
        return res.send({ data })
    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error obtaining information' })
    }
}