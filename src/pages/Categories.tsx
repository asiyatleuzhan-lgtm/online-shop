import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const categories = ['Beverages', 'Fruits & Vegetables', 'Snacks', 'Bakery', 'Meat & Fish'];

export default function Categories({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 12, elevation: 2 },
  categoryText: { fontSize: 18, fontWeight: '600', color: '#333' },
});