import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  // Бастапқы бетті бірден 'login' етіп орнаттық
  const [currentPage, setCurrentPage] = useState('login');
  const [email, setEmail] = useState('imshuvo97@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.phoneScreen}>

        {/* LOGIN SCREEN */}
        {currentPage === 'login' && (
          <View style={styles.screenContainer}>
            <View>
              {/* Жоғарғы сәбіз иконкасы */}
              <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 40 }}>
                <Text style={{ fontSize: 50 }}>🥕</Text>
              </View>

              <Text style={styles.title}>Loging</Text>
              <Text style={styles.subtitle}>Enter your emails and password</Text>

              {/* Email енгізу */}
              <Text style={styles.label}>Email</Text>
              <TextInput 
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="email@example.com"
                keyboardType="email-address"
              />

              {/* Password енгізу */}
              <Text style={[styles.label, { marginTop: 25 }]}>Password</Text>
              <View style={styles.passwordRow}>
                <TextInput 
                  style={[styles.input, { borderBottomWidth: 0, flex: 1 }]}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  placeholder="Password"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Text style={{ fontSize: 16, color: '#7C7C7C' }}>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
                </TouchableOpacity>
              </View>

              {/* Forgot Password */}
              <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 15 }}>
                <Text style={{ color: '#181B20', fontSize: 13, fontWeight: '500' }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginBottom: 30 }}>
              {/* Log In батырмасы */}
              <TouchableOpacity 
                style={styles.loginButton} 
                onPress={() => setCurrentPage('shop')}
              >
                <Text style={styles.loginButtonText}>Log In</Text>
              </TouchableOpacity>

              {/* Төменгі тіркелу жазуы */}
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <Text style={{ color: '#7C7C7C', fontSize: 14 }}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => alert('Sign up бетіне өту')}>
                  <Text style={{ color: '#53B175', fontSize: 14, fontWeight: '600' }}>Signup</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* SHOP SCREEN */}
        {currentPage === 'shop' && (
          <ScrollView contentContainerStyle={styles.shopContainer}>
            <Text style={{ fontSize: 32, textAlign: 'center', marginBottom: 10 }}>🥕</Text>
            <Text style={{ textAlign: 'center', color: '#828282', fontSize: 12, marginBottom: 20 }}>Dhaka, Banasree</Text>

            <TouchableOpacity style={styles.backToLogin} onPress={() => setCurrentPage('login')}>
              <Text style={{ color: '#53B175', fontWeight: 'bold' }}>⬅️ Login бетіне қайту</Text>
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
    paddingTop: 30,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#030303',
    marginBottom: 8,
  },
  subtitle: {
    color: '#7C7C7C',
    fontSize: 14,
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#7C7C7C',
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    color: '#030303',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 8,
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  loginButton: {
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
  loginButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  shopContainer: {
    padding: 20,
    alignItems: 'center',
  },
  backToLogin: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
  },
});