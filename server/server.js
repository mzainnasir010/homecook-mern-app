const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://zainnasir6921:8RJ7FywM1DNmEVDD@cluster0.ffze6zx.mongodb.net/homecook?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB connection error:', err));

app.use('/api/meals', require('./routes/meals'));
app.use('/api/orders', require('./routes/orders'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
