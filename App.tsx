import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [currentPage, setCurrentPage] = useState('signup');
  const [username, setUsername] = useState('Afsar Hossen');
  const [email, setEmail] = useState('imshuvo97@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.phoneScreen}>

        {/* SIGN UP SCREEN */}
        {currentPage === 'signup' && (
          <View style={styles.screenContainer}>
            <View>
              {/* Жоғарғы сәбіз иконкасы */}
              <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 25 }}>
                <Text style={{ fontSize: 45 }}>🥕</Text>
              </View>

              <Text style={styles.title}>Sign Up</Text>
              <Text style={styles.subtitle}>Enter your credentials to continue</Text>

              {/* Username енгізу */}
              <Text style={styles.label}>Username</Text>
              <TextInput 
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
              />

              {/* Email енгізу */}
              <Text style={[styles.label, { marginTop: 20 }]}>Email</Text>
              <View style={styles.inputRow}>
                <TextInput 
                  style={[styles.input, { borderBottomWidth: 0, flex: 1 }]}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email"
                  keyboardType="email-address"
                />
                <Text style={{ color: '#53B175', fontSize: 16, fontWeight: 'bold' }}>✓</Text>
              </View>

              {/* Password енгізу */}
              <Text style={[styles.label, { marginTop: 20 }]}>Password</Text>
              <View style={styles.inputRow}>
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

              {/* Шарттар туралы мәтін */}
              <Text style={styles.termsText}>
                By continuing you agree to our <Text style={{ color: '#53B175' }}>Terms of Service</Text> and <Text style={{ color: '#53B175' }}>Privacy Policy.</Text>
              </Text>
            </View>

            <View style={{ marginBottom: 25 }}>
              {/* Sing Up батырмасы */}
              <TouchableOpacity 
                style={styles.signupButton} 
                onPress={() => setCurrentPage('shop')}
              >
                <Text style={styles.signupButtonText}>Sing Up</Text>
              </TouchableOpacity>

              {/* Төменгі кіру сілтемесі */}
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                <Text style={{ color: '#7C7C7C', fontSize: 14 }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => alert('Login бетіне өту')}>
                  <Text style={{ color: '#53B175', fontSize: 14, fontWeight: '600' }}>Singup</Text>
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

            <TouchableOpacity style={styles.backToSignup} onPress={() => setCurrentPage('signup')}>
              <Text style={{ color: '#53B175', fontWeight: 'bold' }}>⬅️ Sign Up бетіне қайту</Text>
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
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#030303',
    marginBottom: 6,
  },
  subtitle: {
    color: '#7C7C7C',
    fontSize: 14,
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    color: '#7C7C7C',
    fontWeight: '600',
    marginBottom: 4,
  },
  input: {
    fontSize: 16,
    color: '#030303',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 6,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  termsText: {
    fontSize: 12,
    color: '#7C7C7C',
    marginTop: 20,
    lineHeight: 18,
  },
  signupButton: {
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
  signupButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  shopContainer: {
    padding: 20,
    alignItems: 'center',
  },
  backToSignup: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
  },
});