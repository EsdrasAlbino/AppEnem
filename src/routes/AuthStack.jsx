import { createNativeStackNavigator } from '@react-navigation/native-stack'

//const {Navigator, Screen} = createNativeStackNavigator();   
const Stack = createNativeStackNavigator();

import {
  TelaLogin,
  NewUser
} from '../pages'
//import {useTheme} from 'styled-components';

export function AuthStack() {
  //const {colors} = useTheme();
  return (

    <Stack.Navigator
    /*screenOptions={{
        headerTintColor: colors.onBackground,
        headerStyle: {
          backgroundColor: colors.backgroundSecondary,
        },
      }}*/>
      <Stack.Screen
        name="Login"
        component={TelaLogin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={NewUser}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}