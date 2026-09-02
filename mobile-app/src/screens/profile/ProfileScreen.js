import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import spacing from '../../styles/spacing';
import { useAuth } from '../../context/AuthContext';

const ProfileScreen = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Header title="Profile" subtitle="Manage personal information" />
      <Card>
        <Text>Email: {user?.email || 'demo@patient.com'}</Text>
      </Card>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, padding: spacing.md } });

export default ProfileScreen;
