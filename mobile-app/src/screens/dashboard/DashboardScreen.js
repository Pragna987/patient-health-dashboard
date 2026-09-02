import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';
import Card from '../../components/common/Card';
import spacing from '../../styles/spacing';

const DashboardScreen = () => (
  <View style={styles.container}>
    <Header title="Dashboard" subtitle="Your health overview" />
    <Card>
      <Text>Recent vitals, upcoming appointments, and medication reminders will appear here.</Text>
    </Card>
  </View>
);

const styles = StyleSheet.create({ container: { flex: 1, padding: spacing.md } });

export default DashboardScreen;
