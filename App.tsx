import React from 'react';
import { useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home'
import Demo from './screens/demo'
import { AppStyleContext } from './contexts/AppContext'

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    contentColor: isDarkMode ? 'light-content' : 'dark-content',
    binaryColor: isDarkMode ? Colors.black : Colors.white,
    lightColor: isDarkMode ? Colors.light : Colors.dark,
  };

  return (
    <NavigationContainer>
        <AppStyleContext.Provider value={backgroundStyle}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                    />
                    <Stack.Screen
                        name="Demo"
                        component={Demo}
                    />
            </Stack.Navigator>
        </AppStyleContext.Provider>
    </NavigationContainer>
  );
}

export default App;
