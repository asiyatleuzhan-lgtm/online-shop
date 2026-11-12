import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Checkout({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <TextInput placeholder="Delivery Address" style={styles.input} />
      <TextInput placeholder="Card Number" style={styles.input} keyboardType="numeric" />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('OrdersSuccess')}>
        <Text style={styles.btnText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 15, borderRadius: 10, marginBottom: 15 },
  btn: { backgroundColor: 'green', padding: 15, borderRadius: 10, alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});