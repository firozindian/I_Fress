import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screen/Home';
import GetStart1 from '../Screen/GetStart1';
import GetStart2 from '../Screen/GetStart2';
import GetStart3 from '../Screen/GetStart3';
import GetStart4 from '../Screen/GetStart4';
import GetStart5 from '../Screen/GetStart5';
import GetStart6 from '../Screen/GetStart6';
import GetStart7 from '../Screen/GetStart7';
import GetStart8 from '../Screen/GetStart8';


const Stack = createNativeStackNavigator();

const Routs = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStart1'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="GetStart1" component={GetStart1} options={{ headerShown: false }} />
        <Stack.Screen name="GetStart2" component={GetStart2} options={{ headerShown: false }} />
        <Stack.Screen name="GetStart3" component={GetStart3} options={{ headerShown: false }} />
        <Stack.Screen name="GetStart4" component={GetStart4} options={{ headerShown: false }} />
        <Stack.Screen name="GetStart5" component={GetStart5} options={{ headerShown: false }} />
        <Stack.Screen name="GetStart6" component={GetStart6} options={{ headerShown: false }} />
        <Stack.Screen name="GetStart7" component={GetStart7} options={{ headerShown: false }} />
        <Stack.Screen name="GetStart8" component={GetStart8} options={{ headerShown: false }} />








   

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routs;