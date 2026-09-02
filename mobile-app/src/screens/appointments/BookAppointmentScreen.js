import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import spacing from '../../styles/spacing';

const BookAppointmentScreen = () => {
  const [doctor, setDoctor] = useState('');

  return (
    <View style={styles.container}>
      <Header title="Book Appointment" subtitle="Schedule your next doctor visit" />
      <Input placeholder="Doctor name" value={doctor} onChangeText={setDoctor} />
      <Button title="Book" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, padding: spacing.md } });

export default BookAppointmentScreen;
