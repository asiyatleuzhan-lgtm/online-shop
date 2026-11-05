import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [currentPage, setCurrentPage] = useState('signin');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.phoneScreen}>

        {/* SIGN IN SCREEN */}
        {currentPage === 'signin' && (
          <View style={styles.screenContainer}>
            {/* Жоғарғы сурет бөлімі */}
            <View style={styles.headerImageContainer}>
              <Text style={{ fontSize: 40 }}>🍅 🥦 🍎 🥕</Text>
            </View>

            <View style={styles.contentContainer}>
              <Text style={styles.title}>Get your groceries{'\n'}with nectar</Text>

              {/* Телефон нөмірі */}
              <View style={styles.phoneInputRow}>
                <Text style={{ fontSize: 22 }}>🇰🇿</Text>
                <Text style={styles.phoneCode}>+7</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="701 123 4567"
                  placeholderTextColor="#b0b0b0"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  maxLength={12}
                />
              </View>

              <Text style={styles.socialText}>Or connect with social media</Text>

              {/* Google батырмасы */}
              <TouchableOpacity style={styles.googleButton} onPress={() => setCurrentPage('shop')}>
                <View style={styles.socialIconBox}><Text style={{ color: '#5383EC', fontWeight: 'bold' }}>G</Text></View>
                <Text style={styles.socialButtonText}>Continue with Google</Text>
              </TouchableOpacity>

              {/* Facebook батырмасы */}
              <TouchableOpacity style={styles.fbButton} onPress={() => setCurrentPage('shop')}>
                <View style={styles.socialIconBox}><Text style={{ color: '#4A66AC', fontWeight: 'bold' }}>f</Text></View>
                <Text style={styles.socialButtonText}>Continue with Facebook</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>By continuing you agree to our Terms & Conditions</Text>
            </View>
          </View>
        )}

        {/* SHOP SCREEN */}
        {currentPage === 'shop' && (
          <ScrollView contentContainerStyle={styles.shopContainer}>
            <Text style={{ fontSize: 32, textAlign: 'center', marginBottom: 10 }}>🥕</Text>
            <Text style={{ textAlign: 'center', color: '#828282', fontSize: 12, marginBottom: 20 }}>Dhaka, Banasree</Text>

            <TouchableOpacity style={styles.backToSignin} onPress={() => setCurrentPage('signin')}>
              <Text style={{ color: '#53B175', fontWeight: 'bold' }}>⬅️ Back to Sign In</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#181B20', marginTop: 20 }}>Welcome to Shop!</Text>
            <Text style={{ color: '#7C7C7C', marginTop: 10 }}>Бұл жерде дүкен өнімдері көрсетіледі.</Text>
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
    justifyContent: 'space-between',
  },
  headerImageContainer: {
    width: '100%',
    height: 280,
    backgroundColor: '#fcf8f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingHorizontal: 24,
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#030303',
    marginBottom: 30,
    lineHeight: 34,
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 10,
    marginBottom: 40,
  },
  phoneCode: {
    fontSize: 18,
    fontWeight: '600',
    color: '#030303',
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#030303',
  },
  socialText: {
    textAlign: 'center',
    color: '#828282',
    fontSize: 13,
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: '#5383EC',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 18,
    marginBottom: 16,
  },
  fbButton: {
    backgroundColor: '#4A66AC',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 18,
    marginBottom: 20,
  },
  socialIconBox: {
    width: 28,
    height: 28,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  socialButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
  },
  footerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#828282',
    fontSize: 11,
    textAlign: 'center',
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