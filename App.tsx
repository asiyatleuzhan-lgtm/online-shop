import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [currentPage, setCurrentPage] = useState('phone-input'); // Бастапқы бетті осы экранға қойдық
  const [phoneNumber, setPhoneNumber] = useState('');

  // Сандық пернетақта батырмаларын басқан кезде нөмірге қосу функциясы
  const handleKeyPress = (num: string) => {
    if (phoneNumber.length < 10) {
      setPhoneNumber(prev => prev + num);
    }
  };

  const handleBackspace = () => {
    setPhoneNumber(prev => prev.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.phoneScreen}>

        {/* 1. ENTER MOBILE NUMBER SCREEN (СУРЕТТЕГІ БЕТ) */}
        {currentPage === 'phone-input' && (
          <View style={styles.screenContainer}>
            <View>
              {/* Жоғарғы артқа қайту батырмасы */}
              <TouchableOpacity style={styles.backButton} onPress={() => alert('Welcome бетіне қайту')}>
                <Text style={{ fontSize: 18 }}>〈</Text>
              </TouchableOpacity>

              <Text style={styles.title}>Enter your mobile number</Text>

              <Text style={styles.label}>Mobile Number</Text>
              
              {/* Нөмір енгізу жолы */}
              <View style={styles.phoneInputRow}>
                <Text style={{ fontSize: 20 }}>🇰🇿</Text>
                <Text style={styles.phoneCode}>+7</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="701 123 4567"
                  placeholderTextColor="#b0b0b0"
                  value={phoneNumber}
                  editable={false} // Пернетақта арқылы жазылу үшін
                />
              </View>
            </View>

            {/* Оң жақ төменгі бұрыштағы жасыл стрелка батырмасы */}
            <View style={styles.arrowButtonContainer}>
              <TouchableOpacity 
                style={styles.greenArrowButton} 
                onPress={() => {
                  if(phoneNumber.length < 10) {
                    alert('Толық нөмірді енгізіңіз!');
                    return;
                  }
                  setCurrentPage('shop');
                }}
              >
                <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>〉</Text>
              </TouchableOpacity>
            </View>

            {/* Figma-дағы сандық пернетақта (Keypad) */}
            <View style={styles.keypadContainer}>
              <View style={styles.keyRow}>
                <TouchableOpacity style={styles.key} onPress={() => handleKeyPress('1')}><Text style={styles.keyText}>1</Text><Text style={styles.subKeyText}></Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handleKeyPress('2')}><Text style={styles.keyText}>2</Text><Text style={styles.subKeyText}>ABC</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handleKeyPress('3')}><Text style={styles.keyText}>3</Text><Text style={styles.subKeyText}>DEF</Text></TouchableOpacity>
              </View>
              <View style={styles.keyRow}>
                <TouchableOpacity style={styles.key} onPress={() => handleKeyPress('4')}><Text style={styles.keyText}>4</Text><Text style={styles.subKeyText}>GHI</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handleKeyPress('5')}><Text style={styles.keyText}>5</Text><Text style={styles.subKeyText}>JKL</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handleKeyPress('6')}><Text style={styles.keyText}>6</Text><Text style={styles.subKeyText}>MNO</Text></TouchableOpacity>
              </View>
              <View style={styles.keyRow}>
                <TouchableOpacity style={styles.key} onPress={() => handleKeyPress('7')}><Text style={styles.keyText}>7</Text><Text style={styles.subKeyText}>PQRS</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handleKeyPress('8')}><Text style={styles.keyText}>8</Text><Text style={styles.subKeyText}>TUV</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handleKeyPress('9')}><Text style={styles.keyText}>9</Text><Text style={styles.subKeyText}>WXYZ</Text></TouchableOpacity>
              </View>
              <View style={styles.keyRow}>
                <TouchableOpacity style={styles.key}><Text style={styles.keyText}>*#+</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handleKeyPress('0')}><Text style={styles.keyText}>0</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={handleBackspace}><Text style={styles.keyText}>⌫</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* 2. SHOP SCREEN (Дүкен беті) */}
        {currentPage === 'shop' && (
          <ScrollView contentContainerStyle={styles.shopContainer}>
            <Text style={{ fontSize: 32, textAlign: 'center', marginBottom: 10 }}>🥕</Text>
            <Text style={{ textAlign: 'center', color: '#828282', fontSize: 12, marginBottom: 20 }}>Dhaka, Banasree</Text>

            <TouchableOpacity style={styles.backToSignin} onPress={() => setCurrentPage('phone-input')}>
              <Text style={{ color: '#53B175', fontWeight: 'bold' }}>⬅️ Назад к вводу номера</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#181B20', marginTop: 20 }}>Welcome to Shop!</Text>
            <Text style={{ color: '#7C7C7C', marginTop: 10 }}>Дүкеннің басты беті сәтті ашылды.</Text>
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
    justifyContent: 'space-between',
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
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#030303',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#7C7C7C',
    marginBottom: 5,
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 8,
  },
  phoneCode: {
    fontSize: 18,
    fontWeight: '600',
    color: '#030303',
    marginLeft: 8,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#030303',
  },
  arrowButtonContainer: {
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  greenArrowButton: {
    width: 60,
    height: 60,
    backgroundColor: '#53B175',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#53B175',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  keypadContainer: {
    backgroundColor: '#F4F4F4',
    paddingBottom: 20,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  keyRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  key: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    marginHorizontal: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  keyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#030303',
  },
  subKeyText: {
    fontSize: 8,
    color: '#828282',
    fontWeight: 'bold',
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