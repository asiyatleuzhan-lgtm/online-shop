import React from 'react';
import { Text } from 'react-native';
import { Page, Header, Field, Btn, C } from './UI';

export default function Login({ navigation }: any) {
  return (
    <Page>
      <Text style={{ fontSize: 55, marginTop: 40 }}>👋</Text>
      <Header title="Welcome Back!" />
      <Text style={{ color: C.muted, marginBottom: 25 }}>
        Login to your account
      </Text>

      <Field label="Email" placeholder="Enter your email" />
      <Field label="Password" placeholder="Enter your password" />

      <Text style={{ textAlign: 'right', color: C.green }}>
        Forgot Password?
      </Text>

      <Btn title="Login" onPress={() => navigation?.navigate('Home')} />

      <Text
        style={{ textAlign: 'center', marginTop: 25, color: C.dark }}
        onPress={() => navigation?.navigate('SignUp')}
      >
        Don't have an account? Sign Up
      </Text>
    </Page>
  );
}