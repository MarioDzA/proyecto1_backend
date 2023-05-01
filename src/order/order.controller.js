import ordersModel from './orders.model';

export async function createOrder(req, res) {
  try {
    const product = req.body;
    product.active = true;
    const document = await ordersModel.create(product);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
export async function readOrder(req, res) {
  try {
    const id = req.params.id;
    const document = await ordersModel.findOne({ _id: id, active: true });
    document ? res.status(200).json(document) : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function searchOrder(req, res) {
  try {
   const { user_id, restaurant_id } = req.query;

    const filter = { 
      active: true,
      ...(Date1 && Date2 && {createdAt:{$gte: new Date(Date1), $lt: new Date(Date2)}})
     };
    if ({user_id}) {
      query.restaurant_id = restaurant_id;
    }

    if ({user_id}) {
      query.user_id = user_id;
    }
    
    const document = await productsModel.find(filter);
    document.length > 0 ? res.status(200).json(document) : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function getOrderssended(req, res) {
  try {
    const document = await ordersModel.find({
      active: true,
      status: 'sent'
    });
    document ? res.status(200).json(document) : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}


export async function updateOrder(req, res) {
  try {
    const id = req.params.id;
    const document = await ordersModel.findOneAndUpdate(
      { _id: id, active: true, status: 'created' },
      req.body,
      { runValidators: true }
    );
    document ? res.status(200).json('changes applied') : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function deleteOrder(req, res) {
  try {
    const id = req.params.id;
    const document = await ordersModel.findByIdAndUpdate( { _id: id, active: true }, {
      active: false,
    });
    document ? res.status(200).json('changes applied') : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
