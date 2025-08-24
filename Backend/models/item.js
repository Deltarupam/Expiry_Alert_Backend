const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  ownerId: String,
  name: String,
  category: String,
  expiryDate: Date,
  photo: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', ItemSchema);
