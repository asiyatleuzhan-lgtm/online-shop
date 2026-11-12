import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ProductDetails({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageText}>📦 Product Image</Text>
      </View>
      <Text style={styles.title}>Product Name</Text>
      <Text style={styles.price}>$3.99</Text>
      <Text style={styles.description}>This is a detailed description of the selected product item in your online shop.</Text>
      
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MyCart')}>
        <Text style={styles.btnText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'space-between', backgroundColor: '#fff' },
  imagePlaceholder: { height: 250, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center', borderRadius: 12 },
  imageText: { color: '#888', fontSize: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 15 },
  price: { fontSize: 20, color: 'green', fontWeight: 'bold', marginVertical: 5 },
  description: { color: '#666', lineHeight: 22 },
  btn: { backgroundColor: 'green', padding: 15, borderRadius: 10, alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});