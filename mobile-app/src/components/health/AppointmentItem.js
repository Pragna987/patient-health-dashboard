import React from 'react';
import { Text } from 'react-native';
import Card from '../common/Card';
import { formatDate } from '../../utils/formatters';

const AppointmentItem = ({ appointment }) => (
  <Card>
    <Text>{appointment?.doctor || 'Doctor Appointment'}</Text>
    <Text>{formatDate(appointment?.date)}</Text>
    <Text>{appointment?.status || 'scheduled'}</Text>
  </Card>
);

export default AppointmentItem;
