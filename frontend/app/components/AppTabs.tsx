import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppParamList } from './AppParamList';
import { Statistics } from "../screens/Statistics";
import { PreviousTrips } from "../screens/PreviousTrips";
import { AntDesign } from '@expo/vector-icons';
import { Settings } from '../screens/Settings';
import { HomeStack } from './HomeStack';

interface AppTabProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabProps> = ({}) => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Landing') {
                    iconName = 'home';
                } else if (route.name === 'Statistics') {
                    iconName = 'barschart';
                } else if (route.name === 'PreviousTrips') {
                    iconName = 'flag';
                } else if (route.name === 'Settings') {
                    iconName = 'setting';
                } 
                    return <AntDesign name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
                showLabel: false,
                activeBackgroundColor: '#000',
                inactiveBackgroundColor: '#000',
                style: {
                    backgroundColor: '#171717',
                    borderRadius: 60,
                    bottom: 50,
                    height: 50,
                    marginRight: 85,
                    marginLeft: 85,
                    borderTopWidth: 0,
                    position: 'absolute',
                    paddingStart: 5,
                    paddingEnd: 5
                },
                tabStyle: {
                    backgroundColor: 'transparent',
                    top: 13,
                    height: 23
                }
            }}
        >
            <Tabs.Screen name='Landing' component={HomeStack} />
            <Tabs.Screen name='Statistics' component={Statistics} />
            <Tabs.Screen name='PreviousTrips' component={PreviousTrips} />
            <Tabs.Screen name='Settings' component={Settings} />
        </Tabs.Navigator>
    );
}
