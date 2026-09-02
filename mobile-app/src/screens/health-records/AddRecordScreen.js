import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import spacing from '../../styles/spacing';

const AddRecordScreen = () => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Header title="Add Health Record" subtitle="Save your latest measurement" />
      <Input placeholder="Enter value" value={value} onChangeText={setValue} />
      <Button title="Save" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, padding: spacing.md } });

export default AddRecordScreen;
