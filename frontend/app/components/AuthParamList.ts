import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AuthParamList = {
    Onboarding: undefined;
}

export type AuthNavProps<T extends keyof AuthParamList> = {
    navigation: StackNavigationProp<AuthParamList, T>,
    route: RouteProp<AuthParamList, T>
}

export type User =  {
    name: null | string
    age: null | number
    pnr: null | string
    ip: null | string
    onboarded: null | boolean
}