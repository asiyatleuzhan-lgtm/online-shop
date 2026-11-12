import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MyCart({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      <View style={styles.cartItem}>
        <Text style={styles.itemName}>Orange Juice</Text>
        <Text style={styles.itemPrice}>$3.99</Text>
      </View>
      <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.navigate('Checkout')}>
        <Text style={styles.btnText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'space-between', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold' },
  cartItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderColor: '#eee' },
  itemName: { fontSize: 18 },
  itemPrice: { fontSize: 18, fontWeight: 'bold' },
  checkoutBtn: { backgroundColor: 'green', padding: 15, borderRadius: 10, alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});