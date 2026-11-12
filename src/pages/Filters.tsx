import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Filters({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filters</Text>
      <Text style={styles.label}>Categories: Beverages, Snacks</Text>
      
      <TouchableOpacity style={styles.applyBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.btnText}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'space-between', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold' },
  label: { fontSize: 16, color: '#666' },
  applyBtn: { backgroundColor: 'green', padding: 15, borderRadius: 10, alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});