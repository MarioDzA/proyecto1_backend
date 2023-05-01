import { Router } from 'express';

import {
  createOrder,
  deleteOrder,
  readOrder,
  searchOrder,
  updateOrder,
  getOrderssended,
} from './order.controller';

const orderRouter = Router();

orderRouter.post('/', createOrder);
orderRouter.get('/:_id', readOrder);
orderRouter.get('/', searchOrder);
orderRouter.get('/sended/', getOrderSent);
orderRouter.patch('/:_id', updateOrder);
orderRouter.delete('/:_id', deleteOrder);

export default orderRouter;
