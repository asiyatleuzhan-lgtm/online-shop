import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const cartItems = [
  { id: '1', name: 'Органикалық банан', weight: '1 дана, бағасы', price: '4.99', image: 'https://cdn-icons-png.flaticon.com/512/2909/2909808.png', quantity: 1 },
  { id: '2', name: 'Қызыл алма', weight: '1 кг, бағасы', price: '3.99', image: 'https://cdn-icons-png.flaticon.com/512/845/845646.png', quantity: 2 },
  { id: '3', name: 'Болгар бұрышы', weight: '1 кг, бағасы', price: '5.49', image: 'https://cdn-icons-png.flaticon.com/512/3014/3014676.png', quantity: 1 },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Менің себетім</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Cart Items List */}
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartCard}>
            <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode="contain" />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemWeight}>{item.weight}</Text>
              <Text style={styles.itemPrice}>\$ {item.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.qtyButton}>
                <Ionicons name="remove" size={16} color="#7C7C7C" />
              </TouchableOpacity>
              <Text style={styles.qtyText}>{item.quantity}</Text>
              <TouchableOpacity style={styles.qtyButton}>
                <Ionicons name="add" size={16} color="#53B175" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Total Price Section */}
        <View style={styles.totalSection}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Барлығы:</Text>
            <Text style={styles.totalAmount}>\$ 18.46</Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Тапсырысты рәсімдеу</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="storefront-outline" size={24} color="#181725" />
          <Text style={styles.navText}>Дүкен</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search-outline" size={24} color="#181725" />
          <Text style={styles.navText}>Іздеу</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cart" size={24} color="#53B175" />
          <Text style={[styles.navText, { color: '#53B175' }]}>Себет</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="heart-outline" size={24} color="#181725" />
          <Text style={styles.navText}>Тізім</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#181725" />
          <Text style={styles.navText}>Профиль</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingTop: 40 },
  header: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#E2E2E2', alignItems: 'center', marginBottom: 15 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#181725' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 100 },
  cartCard: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingVertical: 15 },
  itemImage: { width: 70, height: 70, marginRight: 15 },
  itemDetails: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#181725', marginBottom: 4 },
  itemWeight: { fontSize: 12, color: '#7C7C7C', marginBottom: 8 },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 12, padding: 5 },
  qtyButton: { padding: 5 },
  qtyText: { fontSize: 16, fontWeight: 'bold', marginHorizontal: 10, color: '#181725' },
  totalSection: { marginTop: 30, backgroundColor: '#F2F3F2', borderRadius: 18, padding: 20 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  totalLabel: { fontSize: 16, color: '#7C7C7C', fontWeight: '600' },
  totalAmount: { fontSize: 18, fontWeight: 'bold', color: '#181725' },
  checkoutButton: { backgroundColor: '#53B175', borderRadius: 18, paddingVertical: 18, alignItems: 'center' },
  checkoutButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#E2E2E2', paddingVertical: 10, position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#FFF' },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 10, color: '#181725', marginTop: 3 },
});