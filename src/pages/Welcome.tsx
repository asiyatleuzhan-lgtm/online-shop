import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Welcome({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🛒</Text>
      <Text style={styles.title}>Welcome to Online Shop</Text>
      <Text style={styles.subtitle}>Get your groceries delivered fast</Text>
      
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  logo: { fontSize: 60, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { color: '#666', textAlign: 'center', marginBottom: 40 },
  btn: { backgroundColor: 'green', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});