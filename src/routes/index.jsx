import {NavigationContainer} from '@react-navigation/native'
import { AuthStack } from './AuthStack'

import { StackRoutes } from './stack.routes'

export default function Routes(){
    const auth = true;
    return(
        <NavigationContainer>
             {auth ? <StackRoutes/> : <AuthStack/>}
        </NavigationContainer>
    )
}