import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';
import Card from '../../components/common/Card';
import spacing from '../../styles/spacing';

const LabResultsScreen = () => (
  <View style={styles.container}>
    <Header title="Lab Results" subtitle="Store and review your reports" />
    <Card>
      <Text>No lab results yet.</Text>
    </Card>
  </View>
);

const styles = StyleSheet.create({ container: { flex: 1, padding: spacing.md } });

export default LabResultsScreen;
