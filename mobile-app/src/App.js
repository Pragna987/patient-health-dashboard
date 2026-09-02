import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AuthProvider } from './context/AuthContext';
import { HealthProvider } from './context/HealthContext';
import RootNavigator from './navigation/RootNavigator';
import colors from './styles/colors';

const App = () => (
  <SafeAreaView style={styles.container}>
    <AuthProvider>
      <HealthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </HealthProvider>
    </AuthProvider>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
});

export default App;
