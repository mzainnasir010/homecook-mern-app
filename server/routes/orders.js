const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: 'Order saved', order: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save order' });
  }
});

module.exports = router;
