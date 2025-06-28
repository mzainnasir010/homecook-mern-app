const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [String], // optionally update to actual object structure if needed
  totalPrice: Number,
  customerName: String,
  address: String,
  phone: String,
  deliveryTime: String,
  orderDate: String,
  cart: [mongoose.Schema.Types.Mixed], // flexible structure for cart items
  totalAmount: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
