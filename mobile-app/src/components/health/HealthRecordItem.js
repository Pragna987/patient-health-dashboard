import React from 'react';
import { Text } from 'react-native';
import Card from '../common/Card';
import { formatDate } from '../../utils/formatters';

const HealthRecordItem = ({ record }) => (
  <Card>
    <Text>{record?.type || 'Health Record'}</Text>
    <Text>{record?.value || '--'}</Text>
    <Text>{formatDate(record?.date)}</Text>
  </Card>
);

export default HealthRecordItem;
