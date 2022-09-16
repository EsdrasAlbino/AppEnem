import { createNativeStackNavigator } from '@react-navigation/native-stack'

//const {Navigator, Screen} = createNativeStackNavigator();   
const Stack = createNativeStackNavigator();

import TelaLogin from '../pages/Login/TelaLogin'
//import {useTheme} from 'styled-components';

export function AuthStack(){
    //const {colors} = useTheme();
    return(

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
      </Stack.Navigator>
    )
}