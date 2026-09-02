import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import spacing from '../../styles/spacing';
import { useAuth } from '../../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Header title="Welcome Back" subtitle="Login to your patient dashboard" />
      <Input placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
      <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={() => login(email, password)} />
      <Button style={styles.secondaryBtn} title="Create account" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.md, justifyContent: 'center' },
  secondaryBtn: { marginTop: spacing.sm }
});

export default LoginScreen;
