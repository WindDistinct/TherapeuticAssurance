import mongoose, { Document, Schema } from "mongoose";

interface IOrder extends Document {
  productos: { productId: string; cantidad: number; precio: number }[];
  total: number;
  creadoEl: Date;
}
  
const OrderSchema: Schema = new Schema({
  productos: [
    {
      productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      cantidad: { type: Number, required: true },
      precio: { type: Number, required:true }
    }
  ],
  total: { type: Number, required: true },
  creadoEl: { type: Date, default: Date.now }
});

const Order = mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);

export default Order;