import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import spacing from '../../styles/spacing';

const AddMedicationScreen = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Header title="Add Medication" subtitle="Set medication details and reminders" />
      <Input placeholder="Medication name" value={name} onChangeText={setName} />
      <Button title="Save" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, padding: spacing.md } });

export default AddMedicationScreen;
