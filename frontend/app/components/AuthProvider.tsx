import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import { User } from '../components/AuthParamList'

type UserObj = null | User;

interface AuthProviderProps {}

export const AuthContext = React.createContext<{
    user: UserObj,
    login: () => void,
    logout: () => void
}>({
    user: null,
    login: () => {},
    logout: () => {}
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<UserObj>(null);
    return (
        <AuthContext.Provider value={{
            user,
            login: () => {
                const mock_user = { name: 'test', age: 10, pnr: '12321', ip: '123.213.213', onboarded: true };
                setUser(mock_user);
                AsyncStorage.setItem('user', JSON.stringify(mock_user));
            },
            logout: () => {
                setUser(null);
                AsyncStorage.removeItem('user');
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
}