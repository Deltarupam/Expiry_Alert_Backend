const Item = require('../models/Item');

exports.addItem = async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json({ success: true, item });
};

exports.getItems = async (req, res) => {
  const items = await Item.find({ ownerId: req.params.ownerId });
  res.json(items);
};

exports.updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
