import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

// Мысал ретіндегі сусындар тізімі
const beveragesData = [
  { id: '1', name: 'Orange Juice', price: '$3.99' },
  { id: '2', name: 'Cola', price: '$2.50' },
  { id: '3', name: 'Green Tea', price: '$1.99' },
  { id: '4', name: 'Mineral Water', price: '$1.20' },
];

export default function Beverages({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Beverages</Text>
      
      <FlatList
        data={beveragesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <Text style={styles.addButton}>＋</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  addButton: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
  },
});