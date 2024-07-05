import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Routes } from './src/routes/routes';
import store from './src/store/store';
import { Provider } from 'react-redux';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView className='flex-1'>
      <View className='flex-1'>
        <Provider store={store}>
          <Routes />
        </Provider>
      </View>
    </GestureHandlerRootView>
  );
}

export default App;
