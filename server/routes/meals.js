const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// GET all menu items
router.get('/', async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
});

module.exports = router;

