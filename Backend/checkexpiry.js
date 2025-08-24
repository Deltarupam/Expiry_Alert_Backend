const cron = require('node-cron');
const Item = require('./models/Item');
const admin = require('firebase-admin');

cron.schedule('0 9 * * *', async () => {
  const today = new Date();
  const items = await Item.find();
  items.forEach(item => {
    const diffDays = Math.ceil((new Date(item.expiryDate) - today) / (1000 * 60 * 60 * 24));
    if ([7, 3, 1].includes(diffDays)) {
      // send firebase push notification to item.ownerId
    }
  });
});