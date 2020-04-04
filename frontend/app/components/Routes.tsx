import React, { useState, useEffect, useContext } from 'react';
import { View, Text, AsyncStorage } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from './AuthProvider';
import { AppTabs } from './AppTabs';
import { AuthStack } from './AuthStack';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    const { user, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(userString => {
                if(userString) {
                    // Decode
                    login();
                }
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <NavigationContainer>
            { user ? <AppTabs />  : <AuthStack /> }
        </NavigationContainer>
    );
}