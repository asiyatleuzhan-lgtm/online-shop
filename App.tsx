import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { id: '1', name: 'Жаңа көкөністер мен жемістер', color: '#EEF7F1', borderColor: '#53B175', image: 'https://cdn-icons-png.flaticon.com/512/2909/2909808.png' },
  { id: '2', name: 'Майлар мен жұмыртқалар', color: '#FFF6EE', borderColor: '#F8A44C', image: 'https://cdn-icons-png.flaticon.com/512/845/845646.png' },
  { id: '3', name: 'Сусындар мен шырындар', color: '#FDEFEF', borderColor: '#F7A593', image: 'https://cdn-icons-png.flaticon.com/512/2405/2405543.png' },
  { id: '4', name: 'Нан өнімдері мен тәттілер', color: '#F4EEF8', borderColor: '#D3B0E0', image: 'https://cdn-icons-png.flaticon.com/512/3014/3014676.png' },
  { id: '5', name: 'Ет және балық өнімдері', color: '#FFF8EC', borderColor: '#FDE598', image: 'https://cdn-icons-png.flaticon.com/512/1041/1041355.png' },
  { id: '6', name: 'Майлы тағамдар мен снектер', color: '#FEEFEF', borderColor: '#B7DFF5', image: 'https://cdn-icons-png.flaticon.com/512/3050/3050153.png' },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Тауар санаттары</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#7C7C7C" style={{ marginRight: 10 }} />
          <TextInput placeholder="Санаттарды іздеу" placeholderTextColor="#7C7C7C" style={styles.searchInput} />
        </View>

        {/* Categories Grid */}
        <View style={styles.grid}>
          {categories.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[styles.card, { backgroundColor: item.color, borderColor: item.borderColor }]}
            >
              <Image source={{ uri: item.image }} style={styles.cardImage} resizeMode="contain" />
              <Text style={styles.cardTitle}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="storefront-outline" size={24} color="#181725" />
          <Text style={styles.navText}>Дүкен</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" size={24} color="#53B175" />
          <Text style={[styles.navText, { color: '#53B175' }]}>Іздеу</Text>
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
  header: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#E2E2E2', alignItems: 'center', marginBottom: 15 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#181725' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 80 },
  searchContainer: { flexDirection: 'row', backgroundColor: '#F2F3F2', borderRadius: 15, paddingHorizontal: 15, paddingVertical: 12, alignItems: 'center', marginBottom: 20 },
  searchInput: { flex: 1, fontSize: 14, color: '#000' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48%', height: 190, borderWidth: 1, borderRadius: 18, padding: 15, marginBottom: 15, alignItems: 'center', justifyContent: 'center' },
  cardImage: { width: 90, height: 90, marginBottom: 15 },
  cardTitle: { fontSize: 14, fontWeight: 'bold', color: '#181725', textAlign: 'center' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#E2E2E2', paddingVertical: 10, position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#FFF' },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 10, color: '#181725', marginTop: 3 },
});