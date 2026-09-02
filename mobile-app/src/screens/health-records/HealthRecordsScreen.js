import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';
import HealthRecordItem from '../../components/health/HealthRecordItem';
import Button from '../../components/common/Button';
import spacing from '../../styles/spacing';

const demoRecords = [{ id: '1', type: 'blood_pressure', value: '120/80', date: new Date().toISOString() }];

const HealthRecordsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Header title="Health Records" subtitle="Track blood pressure, weight, and more" />
    <FlatList data={demoRecords} keyExtractor={(item) => item.id} renderItem={({ item }) => <HealthRecordItem record={item} />} />
    <Button title="Add record" onPress={() => navigation.navigate('AddRecord')} />
  </View>
);

const styles = StyleSheet.create({ container: { flex: 1, padding: spacing.md } });

export default HealthRecordsScreen;
