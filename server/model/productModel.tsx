import mongoose, { Document, Schema } from "mongoose";

//Por qué se extiende como Documento???
export interface IProduct extends Document {
    nombre: string;
    imagen: string;
    precio: string;
    categoria: string;
}

const ProductSchema: Schema = new Schema({
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true }
});

const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;