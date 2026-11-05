import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [currentPage, setCurrentPage] = useState('product-detail');
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.phoneScreen}>
        
        {/* PRODUCT DETAIL SCREEN */}
        {currentPage === 'product-detail' && (
          <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            
            {/* Top Navigation */}
            <View style={styles.topBar}>
              <TouchableOpacity onPress={() => alert('Артқа қайту')}><Text style={{ fontSize: 20 }}>〈</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Бөлісу')}><Text style={{ fontSize: 18 }}>📤</Text></TouchableOpacity>
            </View>

            {/* Apple Image Area */}
            <View style={styles.imageContainer}>
              <Text style={{ fontSize: 90 }}>🍎</Text>
              <View style={styles.paginationDots}>
                <View style={[styles.dot, styles.dotActive]} />
                <View style={styles.dot} />
              </View>
            </View>

            {/* Title & Favorite */}
            <View style={styles.titleRow}>
              <View>
                <Text style={styles.prodTitle}>Naturel Red Apple</Text>
                <Text style={styles.prodSub}>1kg, Price</Text>
              </View>
              <TouchableOpacity><Text style={{ fontSize: 24 }}>🤍</Text></TouchableOpacity>
            </View>

            {/* Counter & Price */}
            <View style={styles.counterPriceRow}>
              <View style={styles.counterContainer}>
                <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Text style={styles.counterBtn}>-</Text>
                </TouchableOpacity>
                <Text style={styles.counterText}>{quantity}</Text>
                <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                  <Text style={[styles.counterBtn, { color: '#53B175' }]}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.priceText}>${(4.99 * quantity).toFixed(2)}</Text>
            </View>

            {/* Accordion Sections */}
            <View style={styles.sectionDivider}>
              <View style={styles.sectionRow}>
                <Text style={styles.sectionHeaderTitle}>Product Detail</Text>
                <Text style={{ fontSize: 16, color: '#181B20' }}>⌄</Text>
              </View>
              <Text style={styles.detailDesc}>
                Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.
              </Text>
            </View>

            <View style={styles.sectionDivider}>
              <View style={styles.sectionRow}>
                <Text style={styles.sectionHeaderTitle}>Nutritions</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={styles.badge}><Text style={{ fontSize: 10, color: '#7C7C7C', fontWeight: 'bold' }}>100gr</Text></View>
                  <Text style={{ fontSize: 16, color: '#181B20', marginLeft: 8 }}>›</Text>
                </View>
              </View>
            </View>

            <View style={styles.sectionDivider}>
              <View style={styles.sectionRow}>
                <Text style={styles.sectionHeaderTitle}>Review</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color: '#F3603F', fontSize: 14 }}>★★★★★</Text>
                  <Text style={{ fontSize: 16, color: '#181B20', marginLeft: 8 }}>›</Text>
                </View>
              </View>
            </View>

            {/* Add To Basket Button */}
            <TouchableOpacity style={styles.basketButton} onPress={() => alert('Себетке қосылды!')}>
              <Text style={styles.basketButtonText}>Add To Basket</Text>
            </TouchableOpacity>

          </ScrollView>
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
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#F2F3F2',
    marginBottom: 20,
  },
  paginationDots: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#C4C4C4',
    marginHorizontal: 3,
  },
  dotActive: {
    width: 15,
    backgroundColor: '#53B175',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  prodTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181B20',
  },
  prodSub: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 4,
  },
  counterPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterBtn: {
    fontSize: 24,
    color: '#7C7C7C',
    paddingHorizontal: 10,
  },
  counterText: {
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 8,
    textAlign: 'center',
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181B20',
  },
  sectionDivider: {
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
    paddingVertical: 15,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionHeaderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181B20',
  },
  detailDesc: {
    fontSize: 13,
    color: '#7C7C7C',
    lineHeight: 20,
    marginTop: 10,
  },
  badge: {
    backgroundColor: '#EBEBEB',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  basketButton: {
    backgroundColor: '#53B175',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#53B175',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  basketButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});