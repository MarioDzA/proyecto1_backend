import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    user_id: { type: String, required: true, unique: true },
    restaurant_id: { type: String, required: true },
    date: { type: Date, required: true },
    state: {
      type: String,
      required: true,
      enum: [
        'created',
        'sent',
        'accepted',
        'received',
        'heading your way',
        'fullfiled',
      ],
    },
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const orderModel = model('orders', orderSchema);
export default orderModel;