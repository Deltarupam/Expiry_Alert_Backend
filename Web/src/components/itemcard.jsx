import React from 'react';

const ItemCard = ({ item }) => {
  const expiry = new Date(item.expiryDate).toLocaleDateString();

  return (
    <div className="border p-4 rounded shadow">
      <img src={item.photo} alt={item.name} className="h-32 w-full object-cover mb-2" />
      <h2 className="text-lg font-bold">{item.name}</h2>
      <p>Category: {item.category}</p>
      <p>Expiry: {expiry}</p>
    </div>
  );
};

export default ItemCard;