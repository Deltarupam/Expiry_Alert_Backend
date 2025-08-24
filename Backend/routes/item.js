const express = require('express');
const router = express.Router();

const {
  addItem,
  getItems,
  updateItem,
  deleteItem
} = require('../controllers/itemController');

router.post('/add', addItem);
router.get('/:ownerId', getItems);
router.put('/update/:id', updateItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;
