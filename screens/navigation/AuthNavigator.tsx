import React from 'react'
import { Button, Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../auth/WelcomeScreen';
import CarouselScreen from '../auth/CarouselScreen';
import LoginScreen from '../auth/LoginScreen';
import { useNavigation } from '@react-navigation/native';

const AuthStack = createNativeStackNavigator()


const AuthNavigator = () => {
    const navigation = useNavigation();

    return (
        <AuthStack.Navigator initialRouteName="Welcome">
            <AuthStack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name='Crousel' component={CarouselScreen} options={{ headerShown: false }} />
            <AuthStack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />

        </AuthStack.Navigator>
    )
}

export default AuthNavigator

