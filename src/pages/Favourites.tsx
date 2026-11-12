import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const favourites = [
  { id: '1', name: 'Fresh Orange Juice', price: '$3.99' },
  { id: '2', name: 'Organic Bananas', price: '$2.50' },
];

export default function Favourites({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourites</Text>
      <FlatList
        data={favourites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  itemCard: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: '#f5f5f5', borderRadius: 10, marginBottom: 10 },
  itemName: { fontSize: 16, fontWeight: '500' },
  itemPrice: { fontSize: 16, color: 'green', fontWeight: 'bold' },
});