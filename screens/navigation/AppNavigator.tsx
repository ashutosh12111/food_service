import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'

const AppNavigator = () => {
    const AppStack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Auth" component={AuthNavigator} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator