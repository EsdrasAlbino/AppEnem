import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { AuthStack } from './AuthStack'
import { useAuth } from '../contexts/Auth';

import { StackRoutes } from './stack.routes'
import { HomeNavigationTabs } from './Bottom.routes';
import { View, Text } from 'react-native';

export function Routes() {
    const { authData, isLoading } = useAuth();

    if (isLoading) {
        console.log({ isLoading })
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text>Carregando informações...</Text>
            </View>
        )
    }
    return (
        <NavigationContainer>
            {authData ?
                <>
                    <StackRoutes />
                    <HomeNavigationTabs />
                </>
                :
                <AuthStack />
            }
        </NavigationContainer>
    )
}