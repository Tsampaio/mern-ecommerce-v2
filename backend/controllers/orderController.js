import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

//@desc     Create New Order
//@route    Post /api/orders
//@access   Public
const addOrderItems = asyncHandler(async (req, res) => {
  const { 
    orderItems, 
    shippingAddress, 
    paymentMethod, 
    itemsPrice, 
    taxPrice, 
    shippingPrice, 
    totalPrice } = req.body;

    if(orderItems && orderItems.length === 0) {
      res.status(400)
      throw new Error('No order items');
      return
    } else {
      const order = new Order({
        shippingAddress,
        user: req.user._id,
        paymentMethod, 
        itemsPrice, 
        taxPrice, 
        shippingPrice, 
        totalPrice
      });

      const createOrder = await order.save();

      res.status(201).json(createOrder);
    }
});

//@desc     Get Order by ID
//@route    GET /api/orders/:id
//@access   Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');

  if(order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

export { addOrderItems, getOrderById }