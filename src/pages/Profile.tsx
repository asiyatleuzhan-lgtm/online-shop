import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Profile({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.email}>user@example.com</Text>
      <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  email: { color: '#666', fontSize: 16, marginBottom: 30 },
  logoutBtn: { backgroundColor: '#ff4d4d', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center' },
  logoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});