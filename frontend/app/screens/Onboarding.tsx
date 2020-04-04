import React, {useContext} from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Parallax } from '../components/Parallax';
import { AuthNavProps } from '../components/AuthParamList';
import { XButton } from '../components/XButton';
import { AuthContext } from "../components/AuthProvider";

const { width, height } = Dimensions.get("window");

export const Onboarding = ({ navigation, route } : AuthNavProps<'Onboarding'> ) => {
    const { login } = useContext(AuthContext);

    const LoginHandler = () => {
        // AWS API --> Store user in database
        // Login
        login();
    }

    return (
        <React.Fragment>
            <Parallax navigation={navigation}></Parallax>
            <XButton text='Login with BankID' onPress={LoginHandler} top={height - 80} left={width/2 - 92}></XButton>
        </React.Fragment>
    );
}

const onboarding_styles = StyleSheet.create({

});

