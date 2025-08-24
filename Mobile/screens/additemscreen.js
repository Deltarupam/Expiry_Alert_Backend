import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const AddItemScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [photo, setPhoto] = useState('');
  const userId = 'user_id_here'; // store after login

  const handleSubmit = async () => {
    await axios.post('http://localhost:5000/api/item/add', {
      ownerId: userId,
      name,
      category,
      expiryDate,
      photo,
    });
    Alert.alert('Item Added!');
    navigation.goBack();
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 5 }}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={{ borderWidth: 1, marginBottom: 5 }}
      />
      <TextInput
        placeholder="Expiry YYYY-MM-DD"
        value={expiryDate}
        onChangeText={setExpiryDate}
        style={{ borderWidth: 1, marginBottom: 5 }}
      />
      <TextInput
        placeholder="Photo URL"
        value={photo}
        onChangeText={setPhoto}
        style={{ borderWidth: 1, marginBottom: 5 }}
      />
      <Button title="Add Item" onPress={handleSubmit} />
    </View>
  );
};

export default AddItemScreen;