import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';
import MedicationItem from '../../components/health/MedicationItem';
import Button from '../../components/common/Button';
import spacing from '../../styles/spacing';

const demoMeds = [{ id: '1', name: 'Vitamin D', dosage: '500mg', frequency: 'daily' }];

const MedicationsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Header title="Medications" subtitle="Track medication schedules and doses" />
    <FlatList data={demoMeds} keyExtractor={(item) => item.id} renderItem={({ item }) => <MedicationItem medication={item} />} />
    <Button title="Add medication" onPress={() => navigation.navigate('AddMedication')} />
  </View>
);

const styles = StyleSheet.create({ container: { flex: 1, padding: spacing.md } });

export default MedicationsScreen;
