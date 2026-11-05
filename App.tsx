import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [currentPage, setCurrentPage] = useState('product-card');
  const [cartCount, setCartCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.phoneScreen}>

        {/* PRODUCT CARD SCREEN */}
        {currentPage === 'product-card' && (
          <View style={styles.screenContainer}>
            <View>
              <Text style={styles.headerTitle}>Product Component</Text>
            </View>

            {/* Өнім карточкасы (Organic Bananas) */}
            <View style={styles.cardContainer}>
              <View style={styles.imageContainer}>
                <Text style={{ fontSize: 50 }}>🍌</Text>
              </View>
              
              <Text style={styles.productTitle}>Organic Bananas</Text>
              <Text style={styles.productSub}>7pcs, Priceg</Text>

              <View style={styles.cardFooter}>
                <Text style={styles.productPrice}>$4.99</Text>
                <TouchableOpacity 
                  style={styles.addButton}
                  onPress={() => setCartCount(prev => prev + 1)}
                >
                  <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Add to Cart батырмасы */}
            <View style={{ marginBottom: 40 }}>
              <TouchableOpacity 
                style={styles.cartButton} 
                onPress={() => alert(`Себетке қосылды! Барлығы: ${cartCount} өнім`)}
              >
                <Text style={styles.cartButtonText}>✓ Add to Cart</Text>
                <Text style={styles.openCartText}>Open Cart &gt;</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

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
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#030303',
    marginBottom: 20,
  },
  cardContainer: {
    width: 173,
    height: 220,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 18,
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181B20',
  },
  productSub: {
    fontSize: 12,
    color: '#7C7C7C',
    marginBottom: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181B20',
  },
  addButton: {
    width: 45,
    height: 45,
    backgroundColor: '#53B175',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartButton: {
    width: 364,
    height: 67,
    backgroundColor: '#53B175',
    borderRadius: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    shadowColor: '#53B175',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cartButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  openCartText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});