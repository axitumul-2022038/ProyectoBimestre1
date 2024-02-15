import { Schema, model } from "mongoose"

const compraSchema = Schema({
    no:{
        type: Number,
        required: true
    },
    date:{
        type: String,
        maxLength:[9,'the date is put dd/mm/yyyy'],
        required: true
    },
    description:{
        type: String,
        required: true
    },
    product:{
        type: Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    total:{
        type: Number.parseFloat().toFixed(2),
        required: true
    }
},{
    versionKey: false
})

export default model('compra', compraSchema)