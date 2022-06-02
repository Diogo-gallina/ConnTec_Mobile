import * as React from 'react';
import { NavigationContainer,DarkTheme,useTheme,DefaultTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import MyStack from './routes/routes';
import Settings from './Pages/Settings/index'

export default function App() {
  
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>  
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <MyStack/>
      </NavigationContainer>
    </AppearanceProvider>

  );
}