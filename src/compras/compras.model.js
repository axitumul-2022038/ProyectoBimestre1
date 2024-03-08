import { Schema, model } from "mongoose"

const compraSchema = Schema({
    product:{
        type: Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    client:{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
},{
    versionKey: false
})

export default model('compra', compraSchema)