import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';
import SplashScreen from '../screens/auth/SplashScreen';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from '../components/navigation/BottomTabNavigator';
import AddRecordScreen from '../screens/health-records/AddRecordScreen';
import AddMedicationScreen from '../screens/medications/AddMedicationScreen';
import BookAppointmentScreen from '../screens/appointments/BookAppointmentScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      {user ? (
        <>
          <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="AddRecord" component={AddRecordScreen} />
          <Stack.Screen name="AddMedication" component={AddMedicationScreen} />
          <Stack.Screen name="BookAppointment" component={BookAppointmentScreen} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
