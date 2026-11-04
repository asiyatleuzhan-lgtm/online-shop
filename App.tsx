import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Ionicons name="carrot" size={48} color="#FFF" style={styles.logoIcon} />
          <Text style={styles.title}>Welcome{'\n'}to our store</Text>
          <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  overlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)', justifyContent: 'flex-end' },
  content: { padding: 30, alignItems: 'center', marginBottom: 40 },
  logoIcon: { marginBottom: 20 },
  title: { fontSize: 48, fontWeight: 'bold', color: '#FFF', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#FCFCFC', textAlign: 'center', marginBottom: 30, opacity: 0.7 },
  button: { backgroundColor: '#53B175', width: '100%', paddingVertical: 18, borderRadius: 18, alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: '600' },
});