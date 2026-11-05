import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <View style={styles.container}>
      <View style={styles.phoneScreen}>
        
        {/* HOME / SHOP SCREEN */}
        {currentPage === 'home' && (
          <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            
            {/* Location & Search */}
            <View style={{ alignItems: 'center', marginBottom: 15 }}>
              <Text style={{ fontSize: 24 }}>🥕</Text>
              <Text style={{ fontSize: 13, color: '#4C4F4D', fontWeight: '600', marginTop: 4 }}>Dhaka, Banasree</Text>
            </View>

            <View style={styles.searchBar}>
              <Text style={{ fontSize: 16, marginRight: 10 }}>🔍</Text>
              <TextInput placeholder="Search Store" placeholderTextColor="#7C7C7C" style={{ flex: 1, fontSize: 14 }} />
            </View>

            {/* Banner */}
            <View style={styles.banner}>
              <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#181B20' }}>Fresh Vegetables</Text>
                <Text style={{ fontSize: 13, color: '#53B175', fontWeight: '600', marginTop: 4 }}>Get Up To 40% OFF</Text>
              </View>
              <Text style={{ fontSize: 30 }}>🥦</Text>
            </View>

            {/* Exclusive Offer Header */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Exclusive Offer</Text>
              <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
            </View>

            {/* Exclusive Products Row */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
              <View style={styles.productCard}>
                <Text style={{ fontSize: 40, textAlign: 'center', marginBottom: 10 }}>🍌</Text>
                <Text style={styles.prodName}>Organic Bananas</Text>
                <Text style={styles.prodDesc}>7pcs, Priceg</Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.prodPrice}>$4.99</Text>
                  <TouchableOpacity style={styles.plusBtn}><Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>+</Text></TouchableOpacity>
                </View>
              </View>

              <View style={[styles.productCard, { marginLeft: 15 }]}>
                <Text style={{ fontSize: 40, textAlign: 'center', marginBottom: 10 }}>🍎</Text>
                <Text style={styles.prodName}>Red Apple</Text>
                <Text style={styles.prodDesc}>1kg, Priceg</Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.prodPrice}>$4.99</Text>
                  <TouchableOpacity style={styles.plusBtn}><Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>+</Text></TouchableOpacity>
                </View>
              </View>
            </ScrollView>

            {/* Best Selling Header */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Best Selling</Text>
              <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
            </View>

            {/* Best Selling Products Row */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
              <View style={styles.productCard}>
                <Text style={{ fontSize: 40, textAlign: 'center', marginBottom: 10 }}>🌶️</Text>
                <Text style={styles.prodName}>Bell Pepper</Text>
                <Text style={styles.prodDesc}>1kg, Priceg</Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.prodPrice}>$4.99</Text>
                  <TouchableOpacity style={styles.plusBtn}><Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>+</Text></TouchableOpacity>
                </View>
              </View>

              <View style={[styles.productCard, { marginLeft: 15 }]}>
                <Text style={{ fontSize: 40, textAlign: 'center', marginBottom: 10 }}>🫚</Text>
                <Text style={styles.prodName}>Ginger</Text>
                <Text style={styles.prodDesc}>250g, Priceg</Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.prodPrice}>$4.99</Text>
                  <TouchableOpacity style={styles.plusBtn}><Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>+</Text></TouchableOpacity>
                </View>
              </View>
            </ScrollView>

          </ScrollView>
        )}

        {/* Bottom Navigation Bar */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}><Text style={{ fontSize: 18 }}>🛒</Text><Text style={styles.navTextActive}>Shop</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navItem}><Text style={{ fontSize: 18 }}>🔍</Text><Text style={styles.navText}>Explore</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navItem}><Text style={{ fontSize: 18 }}>🛍️</Text><Text style={styles.navText}>Cart</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navItem}><Text style={{ fontSize: 18 }}>❤️</Text><Text style={styles.navText}>Favourite</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navItem}><Text style={{ fontSize: 18 }}>👤</Text><Text style={styles.navText}>Account</Text></TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneScreen: {
    width: '100%',
    maxWidth: 414,
    height: '100%',
    maxHeight: 896,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    justifyContent: 'space-between',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 90,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
  },
  banner: {
    height: 115,
    backgroundColor: '#E4F3EA',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181B20',
  },
  seeAll: {
    fontSize: 14,
    color: '#53B175',
    fontWeight: '600',
  },
  productCard: {
    width: 150,
    height: 210,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 18,
    padding: 12,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  prodName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#181B20',
  },
  prodDesc: {
    fontSize: 12,
    color: '#7C7C7C',
    marginBottom: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prodPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#181B20',
  },
  plusBtn: {
    width: 35,
    height: 35,
    backgroundColor: '#53B175',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNav: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 10,
    color: '#7C7C7C',
    marginTop: 3,
  },
  navTextActive: {
    fontSize: 10,
    color: '#53B175',
    fontWeight: 'bold',
    marginTop: 3,
  },
});