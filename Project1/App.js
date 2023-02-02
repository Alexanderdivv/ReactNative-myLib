import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ChallegeScreen from './src/screens/FirstScreen';
import FirstScreen from './src/screens/FirstScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <ChallegeScreen />
    </SafeAreaProvider>
  );
};

export default App;
