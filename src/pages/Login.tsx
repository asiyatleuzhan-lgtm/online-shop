import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Мұнда кіру логикасын жазуға болады
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Login to your account</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center', 
    backgroundColor: '#fff' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 8, 
    color: '#000' 
  },
  subtitle: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 30 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ddd', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fafafa'
  },
  forgotPassword: { 
    textAlign: 'right', 
    color: 'green', 
    marginBottom: 20,
    fontWeight: '500'
  },
  btn: { 
    backgroundColor: 'green', 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center',
    marginBottom: 20
  },
  btnText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: '#666',
  },
  signUpText: {
    color: 'green',
    fontWeight: 'bold',
  },
});