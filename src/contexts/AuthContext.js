import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider(props) {
    const { value, children } = props;

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}