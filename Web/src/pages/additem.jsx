import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [photo, setPhoto] = useState('');
  const userId = localStorage.getItem('userId');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Data to be sent to the backend
    const itemData = {
      ownerId: userId,
      name,
      category,
      expiryDate,
      photo
    };

    try {
      // Send a POST request to the backend API
      const response = await axios.post('http://https://mellifluous-semolina-32e916.netlify.app/', itemData);
      
      // Handle success
      alert('Item added successfully!');
      console.log(response.data);

      // Clear the form fields after successful submission
      setName('');
      setCategory('');
      setExpiryDate('');
      setPhoto('');
      
    } catch (error) {
      // Handle errors
      console.error('Error adding item:', error);
      alert('Failed to add item. Please try again.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;