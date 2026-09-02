import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../../screens/dashboard/DashboardScreen';
import HealthRecordsScreen from '../../screens/health-records/HealthRecordsScreen';
import MedicationsScreen from '../../screens/medications/MedicationsScreen';
import AppointmentsScreen from '../../screens/appointments/AppointmentsScreen';
import LabResultsScreen from '../../screens/lab-results/LabResultsScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
    <Tab.Screen name="Records" component={HealthRecordsScreen} />
    <Tab.Screen name="Medications" component={MedicationsScreen} />
    <Tab.Screen name="Appointments" component={AppointmentsScreen} />
    <Tab.Screen name="Labs" component={LabResultsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
