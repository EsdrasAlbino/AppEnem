import { createNativeStackNavigator } from '@react-navigation/native-stack'

//const {Navigator, Screen} = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

import {
  HomeScreen,
  SettingScreen,
  TelaMat,
  TelaPort
} from '../pages'


export function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TelaMat"
        component={TelaMat}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TelaPort"
        component={TelaPort}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

