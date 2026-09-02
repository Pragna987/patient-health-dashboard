import React from 'react';
import { Text } from 'react-native';
import Card from '../common/Card';

const MedicationItem = ({ medication }) => (
  <Card>
    <Text>{medication?.name || 'Medication'}</Text>
    <Text>{medication?.dosage || '--'}</Text>
    <Text>{medication?.frequency || '--'}</Text>
  </Card>
);

export default MedicationItem;
