import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';
import AppointmentItem from '../../components/health/AppointmentItem';
import Button from '../../components/common/Button';
import spacing from '../../styles/spacing';

const demoAppointments = [{ id: '1', doctor: 'Dr. Smith', date: new Date().toISOString(), status: 'scheduled' }];

const AppointmentsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Header title="Appointments" subtitle="Manage doctor visits" />
    <FlatList data={demoAppointments} keyExtractor={(item) => item.id} renderItem={({ item }) => <AppointmentItem appointment={item} />} />
    <Button title="Book appointment" onPress={() => navigation.navigate('BookAppointment')} />
  </View>
);

const styles = StyleSheet.create({ container: { flex: 1, padding: spacing.md } });

export default AppointmentsScreen;
