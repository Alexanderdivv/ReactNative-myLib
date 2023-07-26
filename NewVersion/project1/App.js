import React from 'react';
// import {SaveAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// import {SaveAreaProvider} from 'react-native';
import FirstScreen from './src/screens/FirstScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <FirstScreen />
    </SafeAreaProvider>
  );
};

export default App;
