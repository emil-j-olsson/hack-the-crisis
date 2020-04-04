import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { AuthContext } from '../components/AuthProvider';

const { width, height } = Dimensions.get("window");

export const Landing = ({}) => {
    const { logout } = useContext(AuthContext);
    return (
        <View style={landing_styles.wrapper}>
            <Text style={{color: '#fff'}}>Landing</Text>
            <Button title='logout' onPress={() => {logout();}}></Button>
        </View>
    );
}

const landing_styles = StyleSheet.create({
    wrapper: {
        width,
        height,
        backgroundColor: '#000',
        top: 0,
        left: 0
    }
});
