import express from 'express';
import userRouter from './user/user.router';
import restaurantRouter from './restaurant/restaurant.router';
import productRouter from './product/product.router';
import orderRouter from './order/order.router';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/user', userRouter);
app.use('/restaurant', restaurantRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);

mongoose
  .connect('mongodb+srv://cluster0.jnp7asc.mongodb.net/',{
    dbName: 'delivery',
    user: 'test',
    pass:'testeo',
  })
  .then(()=> console.log('database connected'))
  .catch((error) => console.log(error))

  try {
  app.listen(port);
  console.log('server running on http://localhost:' + port);
} catch (error) {
  console.log(error);
}
