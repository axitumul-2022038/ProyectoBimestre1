import { Schema, model } from "mongoose"

const facturaSchema = Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    compra:{
        type: Schema.Types.ObjectId,
        ref: 'compra',
        required: true
    }
},{
    versionKey: false
})

export default model('factura', facturaSchema)