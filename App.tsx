import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  // Бастапқы бетті бірден 'location' (Select Your Location) етіп орнаттық
  const [currentPage, setCurrentPage] = useState('location');
  const [selectedZone, setSelectedZone] = useState('Banasree');
  const [selectedArea, setSelectedArea] = useState('Types of your area');

  return (
    <View style={styles.container}>
      <View style={styles.phoneScreen}>

        {/* SELECT YOUR LOCATION SCREEN */}
        {currentPage === 'location' && (
          <View style={styles.screenContainer}>
            <View>
              {/* Артқа қайту батырмасы */}
              <TouchableOpacity style={styles.backButton} onPress={() => alert('Алдыңғы бет')}>
                <Text style={{ fontSize: 18, color: '#030303' }}>〈</Text>
              </TouchableOpacity>

              {/* Иконка мен тақырыптар */}
              <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 30 }}>
                <Text style={{ fontSize: 70, marginBottom: 20 }}>🗺️</Text>
                <Text style={styles.title}>Select Your Location</Text>
                <Text style={styles.subtitle}>
                  Switch on your location to stay in tune with what's happening in your area
                </Text>
              </View>

              {/* Your Zone селекторы */}
              <Text style={styles.label}>Your Zone</Text>
              <View style={styles.dropdownRow}>
                <Text style={styles.dropdownText}>{selectedZone}</Text>
                <Text style={{ color: '#7C7C7C', fontSize: 16 }}>⌄</Text>
              </View>

              {/* Your Area селекторы */}
              <Text style={[styles.label, { marginTop: 25 }]}>Your Area</Text>
              <View style={styles.dropdownRow}>
                <Text style={[styles.dropdownText, { color: selectedArea === 'Types of your area' ? '#B1B1B1' : '#030303' }]}>
                  {selectedArea}
                </Text>
                <Text style={{ color: '#7C7C7C', fontSize: 16 }}>⌄</Text>
              </View>
            </View>

            {/* Submit батырмасы */}
            <View style={{ marginBottom: 30 }}>
              <TouchableOpacity 
                style={styles.submitButton} 
                onPress={() => setCurrentPage('shop')}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* SHOP SCREEN */}
        {currentPage === 'shop' && (
          <ScrollView contentContainerStyle={styles.shopContainer}>
            <Text style={{ fontSize: 32, textAlign: 'center', marginBottom: 10 }}>🥕</Text>
            <Text style={{ textAlign: 'center', color: '#828282', fontSize: 12, marginBottom: 20 }}>Dhaka, Banasree</Text>

            <TouchableOpacity style={styles.backToSignin} onPress={() => setCurrentPage('location')}>
              <Text style={{ color: '#53B175', fontWeight: 'bold' }}>⬅️ Локация таңдауға қайту</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#181B20', marginTop: 20 }}>Welcome to Shop!</Text>
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
  screenContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#030303',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#7C7C7C',
    fontSize: 14,
    paddingHorizontal: 15,
    lineHeight: 20,
  },
  label: {
    fontSize: 14,
    color: '#7C7C7C',
    fontWeight: '600',
    marginBottom: 8,
  },
  dropdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 12,
  },
  dropdownText: {
    fontSize: 16,
    color: '#030303',
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: '#53B175',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    shadowColor: '#53B175',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  shopContainer: {
    padding: 20,
    alignItems: 'center',
  },
  backToSignin: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
  },
});