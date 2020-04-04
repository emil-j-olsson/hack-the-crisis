import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthParamList } from './AuthParamList';
import { Onboarding } from '../screens/Onboarding';


interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
    return (
        <Stack.Navigator screenOptions={{
            header: () => null
        }} 
        initialRouteName='Onboarding'>
            <Stack.Screen name='Onboarding' component={Onboarding} />      
        </Stack.Navigator>
    );
}