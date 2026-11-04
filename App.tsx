import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
  { id: '1', name: 'Органикалық банан', weight: '7 дана, 1кг', price: '$4.99', image: 'https://cdn-icons-png.flaticon.com/512/2909/2909808.png' },
  { id: '2', name: 'Қызыл алма', weight: '1кг', price: '$4.99', image: 'https://cdn-icons-png.flaticon.com/512/415/415733.png' },
  { id: '3', name: 'Болгар бұрышы', weight: '1кг', price: '$2.99', image: 'https://cdn-icons-png.flaticon.com/512/3983/3983602.png' },
  { id: '4', name: 'Зімбір (Имбирь)', weight: '250г', price: '$1.99', image: 'https://cdn-icons-png.flaticon.com/512/1041/1041355.png' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="location" size={20} color="#53B175" />
          <Text style={styles.locationText}>Алматы, Қазақстан</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#7C7C7C" style={{ marginRight: 10 }} />
          <TextInput placeholder="Дүкеннен іздеу" placeholderTextColor="#7C7C7C" style={styles.searchInput} />
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Көкөністер мен жемістер</Text>
          <Text style={styles.bannerSubtitle}>Апта сайынғы үлкен жеңілдіктер 30%-ға дейін</Text>
        </View>

        {/* Exclusive Offer Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Эксклюзивті ұсыныстар</Text>
          <TouchableOpacity><Text style={styles.seeAllText}>Барлығын көру</Text></TouchableOpacity>
        </View>

        {/* Product List */}
        <View style={styles.productsGrid}>
          {products.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} resizeMode="contain" />
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardWeight}>{item.weight}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Ionicons name="add" size={20} color="#FFF" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="storefront-outline" size={24} color="#53B175" />
          <Text style={[styles.navText, { color: '#53B175' }]}>Дүкен</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search-outline" size={24} color="#181725" />
          <Text style={styles.navText}>Іздеу</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cart-outline" size={24} color="#181725" />
          <Text style={styles.navText}>Себет</Text>
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
  scrollContent: { paddingHorizontal: 20, paddingBottom: 80 },
  header: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  locationText: { fontSize: 16, fontWeight: 'bold', color: '#4C4F4D', marginLeft: 6 },
  searchContainer: { flexDirection: 'row', backgroundColor: '#F2F3F2', borderRadius: 15, paddingHorizontal: 15, paddingVertical: 12, alignItems: 'center', marginBottom: 20 },
  searchInput: { flex: 1, fontSize: 14, color: '#000' },
  banner: { backgroundColor: '#53B175', borderRadius: 12, padding: 20, marginBottom: 20 },
  bannerTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  bannerSubtitle: { color: '#EBEBEB', fontSize: 12 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  seeAllText: { fontSize: 14, color: '#53B175', fontWeight: '600' },
  productsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48%', borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 18, padding: 15, marginBottom: 15 },
  cardImage: { width: '100%', height: 90, marginBottom: 10 },
  cardTitle: { fontSize: 15, fontWeight: 'bold', color: '#181725' },
  cardWeight: { fontSize: 12, color: '#7C7C7C', marginVertical: 5 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  cardPrice: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
  addButton: { backgroundColor: '#53B175', borderRadius: 17, width: 35, height: 35, justifyContent: 'center', alignItems: 'center' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#E2E2E2', paddingVertical: 10, position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#FFF' },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 10, color: '#181725', marginTop: 3 },
});