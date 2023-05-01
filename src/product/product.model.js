import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    restaurant_id: { type: String, required: true },
    categories: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    active: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const productModel = model('products', productSchema);
export default productModel;