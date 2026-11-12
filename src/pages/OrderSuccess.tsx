import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function OrdersSuccess({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.successIcon}>✅</Text>
      <Text style={styles.title}>Order Success!</Text>
      <Text style={styles.subtitle}>Your order has been placed successfully.</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  successIcon: { fontSize: 60, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: '#666', marginBottom: 30, textAlign: 'center' },
  btn: { backgroundColor: 'green', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});