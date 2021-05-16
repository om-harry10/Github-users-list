import 'react-native-gesture-handler';

import React from 'react'
import { View, Text } from 'react-native'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from "./Homepage";
import UserInfo from "./UserInfo";
const Stack = createStackNavigator();

const Navscreen = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homepage} options={{ title: 'List', headerStyle: {
      backgroundColor: '#F44336',
      
    },
 } }/>
          <Stack.Screen name="UserInfo" component={UserInfo} options={{ title: 'User Details' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}



export default Navscreen
