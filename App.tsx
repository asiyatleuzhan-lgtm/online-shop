import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [currentPage, setCurrentPage] = useState('phone-input'); // 'phone-input', 'verification', 'location', 'shop'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [selectedZone, setSelectedZone] = useState('Banasree');
  const [selectedArea, setSelectedArea] = useState('Types of your area');

  // Телефон нөмірі үшін пернетақта логикасы
  const handlePhoneKeyPress = (num: string) => {
    if (phoneNumber.length < 10) {
      setPhoneNumber(prev => prev + num);
    }
  };

  const handlePhoneBackspace = () => {
    setPhoneNumber(prev => prev.slice(0, -1));
  };

  // 4 таңбалы код үшін пернетақта логикасы
  const handleCodeKeyPress = (num: string) => {
    if (verificationCode.length < 4) {
      setVerificationCode(prev => prev + num);
    }
  };

  const handleCodeBackspace = () => {
    setVerificationCode(prev => prev.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.phoneScreen}>

        {/* 1. ENTER MOBILE NUMBER SCREEN */}
        {currentPage === 'phone-input' && (
          <View style={styles.screenContainer}>
            <View>
              <TouchableOpacity style={styles.backButton} onPress={() => alert('Welcome беті')}>
                <Text style={{ fontSize: 18 }}>〈</Text>
              </TouchableOpacity>

              <Text style={styles.title}>Enter your mobile number</Text>
              <Text style={styles.label}>Mobile Number</Text>
              
              <View style={styles.phoneInputRow}>
                <Text style={{ fontSize: 20 }}>🇰🇿</Text>
                <Text style={styles.phoneCode}>+7</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="701 123 4567"
                  placeholderTextColor="#b0b0b0"
                  value={phoneNumber}
                  editable={false}
                />
              </View>
            </View>

            <View style={styles.arrowButtonContainer}>
              <TouchableOpacity 
                style={styles.greenArrowButton} 
                onPress={() => {
                  if(phoneNumber.length < 10) {
                    alert('Толық нөмірді енгізіңіз!');
                    return;
                  }
                  setCurrentPage('verification');
                }}
              >
                <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>〉</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.keypadContainer}>
              <View style={styles.keyRow}>
                <TouchableOpacity style={styles.key} onPress={() => handlePhoneKeyPress('1')}><Text style={styles.keyText}>1</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handlePhoneKeyPress('2')}><Text style={styles.keyText}>2</Text><Text style={styles.subKeyText}>ABC</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handlePhoneKeyPress('3')}><Text style={styles.keyText}>3</Text><Text style={styles.subKeyText}>DEF</Text></TouchableOpacity>
              </View>
              <View style={styles.keyRow}>
                <TouchableOpacity style={styles.key} onPress={() => handlePhoneKeyPress('4')}><Text style={styles.keyText}>4</Text><Text style={styles.subKeyText}>GHI</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handlePhoneKeyPress('5')}><Text style={styles.keyText}>5</Text><Text style={styles.subKeyText}>JKL</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handlePhoneKeyPress('6')}><Text style={styles.keyText}>6</Text><Text style={styles.subKeyText}>MNO</Text></TouchableOpacity>
              </View>
              <View style={styles.keyRow}>
                <TouchableOpacity style={styles.key} onPress={() => handlePhoneKeyPress('7')}><Text style={styles.keyText}>7</Text><Text style={styles.subKeyText}>PQRS</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handlePhoneKeyPress('8')}><Text style={styles.keyText}>8</Text><Text style={styles.subKeyText}>TUV</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handlePhoneKeyPress('9')}><Text style={styles.keyText}>9</Text><Text style={styles.subKeyText}>WXYZ</Text></TouchableOpacity>
              </View>
              <View style={styles.keyRow}>
                <TouchableOpacity style={styles.key}><Text style={styles.keyText}>*#+</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handlePhoneKeyPress('0')}><Text style={styles.keyText}>0</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={handlePhoneBackspace}><Text style={styles.keyText}>⌫</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* 2. ENTER 4-DIGIT CODE SCREEN */}
        {currentPage === 'verification' && (
          <View style={styles.screenContainer}>
            <View>
              <TouchableOpacity style={styles.backButton} onPress={() => setCurrentPage('phone-input')}>
                <Text style={{ fontSize: 18 }}>〈</Text>
              </TouchableOpacity>

              <Text style={styles.title}>Enter your 4-digit code</Text>
              <Text style={styles.label}>Code</Text>
              
              <View style={styles.phoneInputRow}>
                <TextInput 
                  style={[styles.input, { letterSpacing: 8, fontSize: 22 }]}
                  placeholder="----"
                  placeholderTextColor="#b0b0b0"
                  value={verificationCode}
                  editable={false}
                />
              </View>

              <TouchableOpacity onPress={() => alert('Код қайта жіберілді!')} style={{ marginTop: 15 }}>
                <Text style={{ color: '#53B175', fontWeight: '500', fontSize: 14 }}>Resend Code</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.arrowButtonContainer}>
              <TouchableOpacity 
                style={styles.greenArrowButton} 
                onPress={() => {
                  if(verificationCode.length < 4) {
                    alert('4 таңбалы кодты толық енгізіңіз!');
                    return;
                  }
                  setCurrentPage('location'); // Орналасқан жерді таңдау бетіне өту
                }}
              >
                <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>〉</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.keypadContainer}>
              <View style={styles.keyRow}>
                <TouchableOpacity style={styles.key} onPress={() => handleCodeKeyPress('1')}><Text style={styles.keyText}>1</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handleCodeKeyPress('2')}><Text style={styles.keyText}>2</Text><Text style={styles.subKeyText}>ABC</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handleCodeKeyPress('3')}><Text style={styles.keyText}>3</Text><Text style={styles.subKeyText}>DEF</Text></TouchableOpacity>
              </View>
              <View style={styles.keyRow}>
                <TouchableOpacity style={styles.key} onPress={() => handleCodeKeyPress('4')}><Text style={styles.keyText}>4</Text><Text style={styles.subKeyText}>GHI</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handleCodeKeyPress('5')}><Text style={styles.keyText}>5</Text><Text style={styles.subKeyText}>JKL</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handleCodeKeyPress('6')}><Text style={styles.keyText}>6</Text><Text style={styles.subKeyText}>MNO</Text></TouchableOpacity>
              </View>
              <View style={styles.keyRow}>
                <TouchableOpacity style={styles.key} onPress={() => handleCodeKeyPress('7')}><Text style={styles.keyText}>7</Text><Text style={styles.subKeyText}>PQRS</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handleCodeKeyPress('8')}><Text style={styles.keyText}>8</Text><Text style={styles.subKeyText}>TUV</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handleCodeKeyPress('9')}><Text style={styles.keyText}>9</Text><Text style={styles.subKeyText}>WXYZ</Text></TouchableOpacity>
              </View>
              <View style={styles.keyRow}>
                <TouchableOpacity style={styles.key}><Text style={styles.keyText}>*#+</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={() => handleCodeKeyPress('0')}><Text style={styles.keyText}>0</Text></TouchableOpacity>
                <TouchableOpacity style={styles.key} onPress={handleCodeBackspace}><Text style={styles.keyText}>⌫</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* 3. SELECT YOUR LOCATION SCREEN (ЖАҢА БЕТ) */}
        {currentPage === 'location' && (
          <View style={styles.screenContainer}>
            <View>
              <TouchableOpacity style={styles.backButton} onPress={() => setCurrentPage('verification')}>
                <Text style={{ fontSize: 18 }}>〈</Text>
              </TouchableOpacity>

              <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 30 }}>
                <Text style={{ fontSize: 60, marginBottom: 15 }}>📍</Text>
                <Text style={[styles.title, { textAlign: 'center', marginBottom: 10 }]}>Select Your Location</Text>
                <Text style={{ textAlign: 'center', color: '#7C7C7C', fontSize: 14, paddingHorizontal: 20, lineHeight: 20 }}>
                  Switch on your location to stay in tune with what's happening in your area
                </Text>
              </View>

              <Text style={styles.label}>Your Zone</Text>
              <View style={styles.dropdownRow}>
                <Text style={styles.dropdownText}>{selectedZone}</Text>
                <Text style={{ color: '#7C7C7C' }}>⌄</Text>
              </View>

              <Text style={[styles.label, { marginTop: 20 }]}>Your Area</Text>
              <View style={styles.dropdownRow}>
                <Text style={[styles.dropdownText, { color: selectedArea === 'Types of your area' ? '#b0b0b0' : '#030303' }]}>
                  {selectedArea}
                </Text>
                <Text style={{ color: '#7C7C7C' }}>⌄</Text>
              </View>
            </View>

            <View style={{ marginBottom: 40 }}>
              <TouchableOpacity 
                style={styles.submitButton} 
                onPress={() => setCurrentPage('shop')}
              >
                <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: '600' }}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* 4. SHOP SCREEN */}
        {currentPage === 'shop' && (
          <ScrollView contentContainerStyle={styles.shopContainer}>
            <Text style={{ fontSize: 32, textAlign: 'center', marginBottom: 10 }}>🥕</Text>
            <Text style={{ textAlign: 'center', color: '#828282', fontSize: 12, marginBottom: 20 }}>Dhaka, Banasree</Text>

            <TouchableOpacity style={styles.backToSignin} onPress={() => setCurrentPage('location')}>
              <Text style={{ color: '#53B175', fontWeight: 'bold' }}>⬅️ Локацияға қайту</Text>
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
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#030303',
    marginBottom: 15,
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
  dropdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 10,
  },
  dropdownText: {
    fontSize: 18,
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