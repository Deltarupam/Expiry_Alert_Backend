import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import axios from 'axios';

const DashboardScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const userId = 'user_id_here'; // store after login

  useEffect(() => {
    axios.get(`http://localhost:5000/api/items/${userId}`)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      <Button title="Add Item" onPress={() => navigation.navigate('AddItem')} />
      {items.map((item) => (
        <View key={item._id} style={{ padding: 10, borderWidth: 1, margin: 5 }}>
          <Text>{item.name}</Text>
          <Text>Category: {item.category}</Text>
          <Text>Expiry: {new Date(item.expiryDate).toLocaleDateString()}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default DashboardScreen;