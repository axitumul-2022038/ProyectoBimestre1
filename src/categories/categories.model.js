import { Schema } from "mongoose";

const categoriesSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

export default mongoose.model('categories', categoriesSchema)