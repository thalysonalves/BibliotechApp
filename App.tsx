import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Routes } from './src/routes/routes';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView className='flex-1'>
      <SafeAreaView className='flex-1'>
        <Routes />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
