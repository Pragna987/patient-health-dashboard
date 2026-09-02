import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import spacing from '../../styles/spacing';
import { useAuth } from '../../context/AuthContext';

const RegisterScreen = ({ navigation }) => {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Header title="Create Account" subtitle="Register to start tracking your health" />
      <Input placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
      <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Register" onPress={() => register(email, password)} />
      <Button style={styles.secondaryBtn} title="Back to login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.md, justifyContent: 'center' },
  secondaryBtn: { marginTop: spacing.sm }
});

export default RegisterScreen;
