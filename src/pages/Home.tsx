import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function Home({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Hello, Welcome! 👋</Text>
      
      <View style={styles.sectionRow}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Categories')}>
          <Text style={styles.cardText}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Beverages')}>
          <Text style={styles.cardText}>Beverages</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('MyCart')}>
        <Text style={styles.cartButtonText}>Go to My Cart 🛒</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', padding: 20 },
  greeting: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, marginTop: 40 },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  card: { flex: 1, backgroundColor: '#fff', padding: 20, borderRadius: 12, marginHorizontal: 5, alignItems: 'center', elevation: 2 },
  cardText: { fontSize: 16, fontWeight: '600' },
  cartButton: { backgroundColor: 'green', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  cartButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});