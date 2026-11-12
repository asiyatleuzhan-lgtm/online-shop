import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Page({ children, style }: any) {
  return <View style={[styles.page, style]}>{children}</View>;
}

export function Header({ title }: { title: string }) {
  return <Text style={styles.header}>{title}</Text>;
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
});