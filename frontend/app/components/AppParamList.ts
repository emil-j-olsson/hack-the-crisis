import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AppParamList = {
    Landing: undefined;
    Statistics: undefined;
    PreviousTrips: undefined;
    Settings: undefined;
}

export type AppParamProps<T extends keyof AppParamList> = {
    navigation: StackNavigationProp<AppParamList, T>,
    route: RouteProp<AppParamList, T>
}